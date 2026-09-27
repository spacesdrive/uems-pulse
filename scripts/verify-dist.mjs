/**
 * Sanity-checks the production artifact in dist/ before it is deployed:
 *  - the SPA shell and hashed bundles exist
 *  - every inline <script> in index.html is allowed by the CSP hash in _headers
 *  - no source maps, env files or credential-looking files/strings are shipped
 *
 *   node scripts/verify-dist.mjs
 */
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const errors = [];
const fail = (msg) => errors.push(msg);

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('dist/index.html is missing — run `npm run build` first.');
  process.exit(1);
}

const files = walk(DIST);
const rel = (f) => path.relative(DIST, f).split(path.sep).join('/');
const html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

// 1. Shell and bundles
if (!/<script type="module"[^>]+src="\/assets\/[^"]+\.js"/.test(html)) fail('index.html does not load a hashed /assets/*.js entry');
if (!files.some((f) => /^assets\/.+\.css$/.test(rel(f)))) fail('no CSS bundle in dist/assets');
for (const required of ['_headers', 'robots.txt', 'sitemap.xml']) {
  if (!fs.existsSync(path.join(DIST, required))) fail(`dist/${required} is missing`);
}

// 2. CSP covers every inline script
const headers = fs.existsSync(path.join(DIST, '_headers')) ? fs.readFileSync(path.join(DIST, '_headers'), 'utf8') : '';
const csp = headers.match(/Content-Security-Policy: (.+)/)?.[1] ?? '';
if (!csp) fail('_headers has no Content-Security-Policy');
for (const [, body] of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
  const hash = `'sha256-${crypto.createHash('sha256').update(body).digest('base64')}'`;
  if (!csp.includes(hash)) fail(`inline script is not allowed by the CSP; add ${hash} to script-src in public/_headers`);
}

// 3. Nothing sensitive in the artifact
const SENSITIVE_NAME = /(^|\/)(\.env(\..*)?|\.dev\.vars.*|.*\.(pem|key|p12|pfx|map)|credentials.*\.json|secrets.*\.json|wrangler\.(toml|jsonc?))$/i;
const SECRET_CONTENT = [
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/,
  /CLOUDFLARE_(API_TOKEN|ACCOUNT_ID)/,
  /\bghp_[A-Za-z0-9]{30,}/,
  /\bgithub_pat_[A-Za-z0-9_]{30,}/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bsk_live_[A-Za-z0-9]{20,}/,
];
for (const f of files) {
  const name = rel(f);
  if (SENSITIVE_NAME.test(name)) fail(`sensitive file in artifact: ${name}`);
  if (!/\.(html|js|css|txt|xml|json|svg)$/.test(name) && name !== '_headers') continue;
  const text = fs.readFileSync(f, 'utf8');
  for (const re of SECRET_CONTENT) if (re.test(text)) fail(`${name} matches secret pattern ${re}`);
}

const bytes = files.reduce((n, f) => n + fs.statSync(f).size, 0);
if (errors.length) {
  console.error(`dist/ verification failed:\n - ${errors.join('\n - ')}`);
  process.exit(1);
}
console.log(`dist/ verified: ${files.length} files, ${(bytes / 1024 / 1024).toFixed(1)} MB`);
