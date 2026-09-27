/**
 * Downloads every remote image referenced in src/data and writes optimised WebP variants
 * to public/images. File names are derived deterministically from the source URL by the
 * same rule as src/lib/image.ts, so data files keep canonical source URLs.
 *
 *   node scripts/fetch-assets.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const DATA_DIR = 'src/data';
const OUT_DIR = 'public/images';
const CACHE = '.cache/img';
const WIDTHS = [640, 1280];
/** Data files may build upload URLs from the `U` prefix constant, e.g. `${U}/2020/10/file.jpg`. */
const TEMPLATE_RE = /\$\{U\}(\/[^"'\s)`]+)/g;
const UPLOADS = 'https://uemsventures.com/wp-content/uploads';
/** Logo files ship with baked-in whitespace; trim it so they can fill their tiles. */
const TRIM_RE = /(logo|2021\/06\/(ahm|allianz|cbhs|cohort|condat|hdfc|ielts|medibank))/i;
const URL_RE = /https:\/\/(?:uemsventures\.com\/wp-content\/uploads|images\.unsplash\.com|media\.licdn\.com)[^"'\s)`]+/g;

/** Must stay in sync with imageKey() in src/lib/image.ts */
export function imageKey(url) {
  if (url.includes('images.unsplash.com')) {
    const id = url.match(/photo-([\w-]+)/)?.[1] ?? 'photo';
    return `unsplash-${id}`;
  }
  if (url.includes('media.licdn.com')) return 'linkedin-logo';
  const rel = url.split('/uploads/')[1] ?? url;
  return rel
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/[^a-z0-9]+/gi, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function collect(dir, found = new Set()) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) collect(p, found);
    else if (/\.(ts|tsx|json)$/.test(entry.name)) {
      const text = fs.readFileSync(p, 'utf8');
      for (const m of text.matchAll(URL_RE)) found.add(m[0].replace(/&amp;/g, '&'));
      for (const m of text.matchAll(TEMPLATE_RE)) found.add(UPLOADS + m[1]);
    }
  }
  return found;
}

async function download(url) {
  const file = path.join(CACHE, imageKey(url));
  if (fs.existsSync(file)) return fs.readFileSync(file);
  const res = await fetch(url, { headers: { 'user-agent': 'Mozilla/5.0 (asset-fetcher)' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(file, buf);
  return buf;
}

async function processOne(url) {
  const key = imageKey(url);
  const targets = WIDTHS.map((w) => path.join(OUT_DIR, `${key}-${w}.webp`));
  if (targets.every((t) => fs.existsSync(t))) return 'cached';
  let buf = await download(url);
  if (TRIM_RE.test(url)) buf = await sharp(buf).trim({ threshold: 12 }).toBuffer();
  const img = sharp(buf, { animated: false });
  const meta = await img.metadata();
  const hasAlpha = Boolean(meta.hasAlpha);
  for (const [i, w] of WIDTHS.entries()) {
    await sharp(buf)
      .resize({ width: Math.min(w, meta.width ?? w), withoutEnlargement: true })
      .webp({ quality: hasAlpha ? 85 : 76, alphaQuality: 90, effort: 5 })
      .toFile(targets[i]);
  }
  return 'ok';
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(CACHE, { recursive: true });
  const urls = [...collect(DATA_DIR)];
  console.log(`Found ${urls.length} image URLs`);
  const failed = [];
  const queue = [...urls];
  const workers = Array.from({ length: 8 }, async () => {
    while (queue.length) {
      const url = queue.shift();
      try {
        await processOne(url);
      } catch (err) {
        failed.push(`${url}  ->  ${err.message}`);
      }
    }
  });
  await Promise.all(workers);
  if (failed.length) {
    console.warn(`\n${failed.length} failed (the app renders a branded fallback for these):`);
    failed.forEach((f) => console.warn('  ' + f));
  }
  console.log('Done.');
}

main();
