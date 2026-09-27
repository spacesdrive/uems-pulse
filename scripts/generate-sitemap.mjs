/**
 * Writes public/sitemap.xml and public/robots.txt from the app's route sources,
 * so every page, post and landing page is discoverable. Runs before each build.
 */
import fs from 'node:fs';

/** Origin the sitemap advertises; set SITE_URL to the host the build is deployed to. */
const SITE = (process.env.SITE_URL || 'https://uemsventures.com').replace(/\/+$/, '');
if (!/^https:\/\/[a-z0-9.-]+$/i.test(SITE)) throw new Error(`SITE_URL must be an https origin, got "${SITE}"`);

const staticRoutes = [
  '/',
  '/blogs',
  '/news-and-events',
  '/contact-us',
  '/programs',
  '/career-clarity-tests',
  '/career-talk',
  '/career-guidance/career-assessment-test',
];

const slugsIn = (dir, ext) =>
  fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(ext) && !f.startsWith('_') && f !== 'index.ts')
    .map((f) => f.slice(0, -ext.length));

const contentPages = slugsIn('src/data/pages', '.ts').filter((s) => s !== 'career-assessment-test');
const legal = slugsIn('src/data/generated/legal', '.json');
const landing = slugsIn('src/data/generated/landing', '.json');
const posts = JSON.parse(fs.readFileSync('src/data/generated/posts-index.json', 'utf8'));
const categories = [...new Set(posts.flatMap((p) => p.categories.map((c) => c.slug)))];

const entries = [
  ...staticRoutes.map((path) => ({ path })),
  ...[...contentPages, ...legal, ...landing].map((s) => ({ path: `/${s}` })),
  ...categories.map((c) => ({ path: `/category/${c}` })),
  ...posts.map((p) => ({ path: `/${p.slug}`, lastmod: p.date?.slice(0, 10) })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(({ path, lastmod }) => `  <url><loc>${SITE}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`)
  .join('\n')}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', xml);
fs.writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`sitemap.xml: ${entries.length} URLs`);
