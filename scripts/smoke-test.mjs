/**
 * Post-deployment smoke test against a live URL.
 *
 *   node scripts/smoke-test.mjs https://uems-pulse.spacesdrive.cc
 *
 * If dist/index.html exists, also waits until the deployed shell references the same
 * entry bundle, proving the new version (not a cached old one) is being served.
 */
import fs from 'node:fs';

const base = (process.argv[2] || process.env.SMOKE_URL || '').replace(/\/+$/, '');
if (!/^(https:\/\/[a-z0-9.-]+|http:\/\/(localhost|127\.0\.0\.1)(:\d+)?)$/i.test(base)) {
  console.error('Usage: node scripts/smoke-test.mjs https://<host>');
  process.exit(2);
}

const ATTEMPTS = Number(process.env.SMOKE_ATTEMPTS || 10);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const entryOf = (html) => html.match(/<script type="module"[^>]+src="(\/assets\/[^"]+\.js)"/)?.[1];
const expectedEntry = fs.existsSync('dist/index.html') ? entryOf(fs.readFileSync('dist/index.html', 'utf8')) : undefined;

async function get(path) {
  const res = await fetch(base + path, { redirect: 'manual', headers: { 'cache-control': 'no-cache' } });
  return { res, body: await res.text() };
}

async function checks() {
  const problems = [];
  const expect = (ok, msg) => ok || problems.push(msg);

  const home = await get('/');
  expect(home.res.status === 200, `/ returned ${home.res.status}`);
  expect(home.body.includes('<div id="root">'), '/ is not the SPA shell');
  const entry = entryOf(home.body);
  expect(Boolean(entry), '/ does not reference an entry bundle');
  if (expectedEntry) expect(entry === expectedEntry, `live entry ${entry} != built entry ${expectedEntry} (old version still served?)`);

  const h = home.res.headers;
  expect(/script-src 'self'/.test(h.get('content-security-policy') ?? ''), 'missing Content-Security-Policy');
  expect(/max-age=\d+/.test(h.get('strict-transport-security') ?? ''), 'missing Strict-Transport-Security');
  expect(h.get('x-content-type-options') === 'nosniff', 'missing X-Content-Type-Options');
  expect(Boolean(h.get('x-frame-options')), 'missing X-Frame-Options');

  if (entry) {
    const js = await fetch(base + entry);
    expect(js.status === 200, `${entry} returned ${js.status}`);
    expect(/javascript/.test(js.headers.get('content-type') ?? ''), `${entry} has content-type ${js.headers.get('content-type')}`);
    expect(/immutable/.test(js.headers.get('cache-control') ?? ''), `${entry} is not cached immutably`);
  }

  for (const path of ['/study-in-usa', '/contact-us', '/blogs', '/some/deep/unknown/path']) {
    const page = await get(path);
    expect(page.res.status === 200 && page.body.includes('<div id="root">'), `${path} did not fall back to the SPA shell (${page.res.status})`);
  }

  const robots = await get('/robots.txt');
  expect(robots.res.status === 200 && robots.body.includes(`Sitemap: ${base}/sitemap.xml`), 'robots.txt missing or points at another host');
  const sitemap = await get('/sitemap.xml');
  expect(sitemap.res.status === 200 && sitemap.body.includes(`<loc>${base}/</loc>`), 'sitemap.xml missing or points at another host');

  const img = await fetch(`${base}/images/brand-logo.webp`, { method: 'HEAD' });
  expect(img.status === 200 && img.headers.get('content-type') === 'image/webp', `brand logo returned ${img.status}`);

  const headersFile = await get('/_headers');
  expect(!headersFile.body.includes('Content-Security-Policy:'), '_headers config file is publicly served');

  return problems;
}

for (let attempt = 1; ; attempt++) {
  let problems;
  try {
    problems = await checks();
  } catch (err) {
    problems = [`request failed: ${err.message}`];
  }
  if (!problems.length) {
    console.log(`Smoke test passed for ${base}${expectedEntry ? ` (serving ${expectedEntry})` : ''}`);
    break;
  }
  if (attempt >= ATTEMPTS) {
    console.error(`Smoke test failed for ${base}:\n - ${problems.join('\n - ')}`);
    process.exit(1);
  }
  console.log(`Attempt ${attempt}/${ATTEMPTS}: ${problems.length} check(s) failing, retrying in 10s…`);
  await sleep(10_000);
}
