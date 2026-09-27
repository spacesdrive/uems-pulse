import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { imageKey } from '@/lib/image';
import { contentPageSlugs } from '@/data/pages';
import { posts } from '@/data/posts';
import { redirects } from '@/data/site';
import { isSafeHref } from '../../scripts/lib/sanitize.mjs';

const ROOT = path.resolve(import.meta.dirname, '../..');
const read = (p: string) => fs.readFileSync(path.join(ROOT, p), 'utf8');
const walk = (dir: string): string[] =>
  fs
    .readdirSync(path.join(ROOT, dir), { withFileTypes: true })
    .flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));

/** Every HTML string the app renders with dangerouslySetInnerHTML (paragraph and list blocks). */
function renderedHtml(): { file: string; html: string }[] {
  const out: { file: string; html: string }[] = [];
  for (const file of walk('src/data/generated').filter((f) => f.endsWith('.json'))) {
    const visit = (node: unknown): void => {
      if (Array.isArray(node)) return node.forEach(visit);
      if (!node || typeof node !== 'object') return;
      const block = node as Record<string, unknown>;
      if (block.type === 'paragraph' && typeof block.html === 'string') out.push({ file, html: block.html });
      if (block.type === 'list' && Array.isArray(block.items)) block.items.forEach((html) => out.push({ file, html: String(html) }));
      Object.values(block).forEach(visit);
    };
    visit(JSON.parse(read(file)));
  }
  return out;
}

describe('generated content safety', () => {
  const blocks = renderedHtml();

  it('finds rendered HTML to check', () => {
    expect(blocks.length).toBeGreaterThan(50);
  });

  it('only uses allowlisted inline tags, without event handlers or styles', () => {
    for (const { file, html } of blocks) {
      for (const [, tag] of html.matchAll(/<\/?([a-z0-9]+)/gi)) {
        expect(['a', 'strong', 'em', 'br'], `${file}: <${tag}>`).toContain(tag.toLowerCase());
      }
      expect(html, file).not.toMatch(/\son[a-z]+\s*=|\sstyle\s*=|\ssrc\s*=/i);
    }
  });

  it('only links to safe URLs, and isolates external links', () => {
    for (const { file, html } of blocks) {
      for (const m of html.matchAll(/<a\s+href="([^"]*)"([^>]*)>/g)) {
        const href = m[1].replace(/&amp;/g, '&');
        expect(isSafeHref(href), `${file}: ${href}`).toBe(true);
        if (/^https?:/.test(href)) expect(m[2], `${file}: ${href}`).toContain('rel="noopener noreferrer"');
      }
    }
  });
});

describe('routes and assets', () => {
  it('redirects only to existing top-level pages', () => {
    const topLevel = new Set(['contact-us', ...contentPageSlugs]);
    for (const [from, to] of Object.entries(redirects)) expect(topLevel.has(to.slice(1)), `${from} -> ${to}`).toBe(true);
  });

  it('never lets a content page and a post share a slug', () => {
    const postSlugs = new Set(posts.map((p) => p.slug));
    expect(contentPageSlugs.filter((s) => postSlugs.has(s))).toEqual([]);
  });

  it('has an optimised local image for every remote image referenced in content', () => {
    // Same pattern scripts/fetch-assets.mjs uses to discover images.
    const URL_RE = /https:\/\/(?:uemsventures\.com\/wp-content\/uploads|images\.unsplash\.com|media\.licdn\.com)[^"'\s)`]+/g;
    const urls = new Set<string>();
    for (const file of walk('src/data').filter((f) => /\.(ts|json)$/.test(f))) {
      for (const [url] of read(file).matchAll(URL_RE)) urls.add(url.replace(/&amp;/g, '&'));
    }
    expect(urls.size).toBeGreaterThan(20);
    const missing = [...urls].filter((u) => !fs.existsSync(path.join(ROOT, 'public/images', `${imageKey(u)}-1280.webp`)));
    expect(missing).toEqual([]);
  });
});
