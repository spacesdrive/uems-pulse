/**
 * Pulls long-form content (blog posts, news, events, legal pages) from uemsventures.com
 * and converts it into typed JSON blocks consumed by the React app.
 *
 *   node scripts/extract-content.mjs
 *
 * Raw HTML is cached in .cache/html so re-runs are fast and offline-friendly.
 */
import * as cheerio from 'cheerio';
import fs from 'node:fs';
import path from 'node:path';
import { escapeHtml, isSafeHref } from './lib/sanitize.mjs';

const ORIGIN = 'https://uemsventures.com';
const CACHE = '.cache/html';
const OUT = 'src/data/generated';

const POSTS = [
  // Blogs
  'low-cost-study-abroad-options-for-indian-students-2026-guide',
  'study-abroad-consultants-in-mumbai-why-choose-uems-ventures',
  'best-european-countries-with-post-study-work-visa-for-indian-students-in-2026',
  'top-affordable-countries-to-study-abroad-for-indian-students-in-2026',
  'study-in-europe-from-india-complete-guide-for-2026',
  'uk-student-visa-process-for-indian-students',
  'ielts-requirement-for-uk-universities',
  'how-overseas-study-consultants-simplify-your-admission-process',
  'why-choose-foreign-studies-consultants-in-mumbai-for-study-abroad',
  'how-an-abroad-studies-consultancy-helps-you-study-overseas',
  'role-of-international-education-consultants-in-for-study-abroad',
  'why-students-prefer-the-best-education-consultants-in-mumbai',
  // News & events
  'the-list-of-institution',
  'our-uk-visa-customer-in-india',
  'webinar-on-achieving-excellence-beyond-the-classroom',
  'career-clarity-webinar-at-the-heartfulness-learning-centre',
  'scool-fest-zest-fest-2022-mumbai',
  'webinar-for-pragyan-foundation-promoter-of-pragyan-international-university',
  'nursing-program-in-australia',
  'top-diplomas-in-culinary-arts-in-canada-2021',
  'seminar-for-bunts-sangha-youth-wing-mumbai-presented-by-uems-ventures',
  'seminar-at-st-johns-college-of-engineering',
  'seminar-at-wisdom-high-school',
  'seminar-at-garodia-international',
  'seminar-at-aeon-classes',
];

const LEGAL = ['terms-conditions', 'privacy-policy'];

/** SEO landing pages that are not in the navigation but are linked from blog posts. */
const LANDING = [
  'abroad-studies-consultancy-in-mumbai-study-abroad-experts',
  'foreign-studies-consultants-in-mumbai-overseas-education-experts',
  'international-education-consultants-in-mumbai-study-abroad-experts',
  'overseas-study-consultants-in-mumbai-trusted-study-abroad-experts',
  'study-abroad-uk-mumbai',
  'study-in-europe-from-mumbai-top-countries-universities-cost-visa-guide',
  'study-in-uk-from-mumbai',
];

/** Decorative theme images that carry no content. */
const DECORATIVE = /(service1_(yellow|navy)_circle|zigzg-line|_bubble|_triangle|morph_bg|oval_bg|placeholder\.png)/;

async function getHtml(slug) {
  const file = path.join(CACHE, `${slug}.html`);
  if (fs.existsSync(file)) return fs.readFileSync(file, 'utf8');
  const res = await fetch(`${ORIGIN}/${slug}/`, {
    headers: { 'user-agent': 'Mozilla/5.0 (content-extractor)' },
  });
  if (!res.ok) throw new Error(`${slug}: HTTP ${res.status}`);
  const html = await res.text();
  fs.mkdirSync(CACHE, { recursive: true });
  fs.writeFileSync(file, html);
  return html;
}

/** Rewrites absolute site links to app-relative routes. */
function localHref(href = '') {
  if (href.startsWith(ORIGIN)) {
    const p = href.slice(ORIGIN.length) || '/';
    return p.toLowerCase();
  }
  return href;
}

const clean = (s) => s.replace(/ /g, ' ').replace(/\s+/g, ' ').trim();

/** Serialises inline content keeping only strong/em/a so it is safe to render as HTML. */
function inlineHtml($, el) {
  let out = '';
  $(el)
    .contents()
    .each((_, node) => {
      if (node.type === 'text') {
        out += escapeHtml(node.data);
        return;
      }
      if (node.type !== 'tag') return;
      const tag = node.tagName.toLowerCase();
      const inner = inlineHtml($, node);
      if (tag === 'br') out += '<br>';
      else if (tag === 'strong' || tag === 'b') out += inner.trim() ? `<strong>${inner}</strong>` : inner;
      else if (tag === 'em' || tag === 'i') out += inner.trim() ? `<em>${inner}</em>` : inner;
      else if (tag === 'a') {
        const href = localHref($(node).attr('href'));
        if (!isSafeHref(href) || href.includes('email-protection')) out += inner;
        else {
          const ext = /^https?:/.test(href);
          out += `<a href="${escapeHtml(href)}"${ext ? ' target="_blank" rel="noopener noreferrer"' : ''}>${inner}</a>`;
        }
      } else if (tag === 'script' || tag === 'style' || tag === 'img') {
        /* skip */
      } else out += inner;
    });
  return out.replace(/\s+/g, ' ');
}

function imgSrc($img) {
  const src = $img.attr('data-src') || $img.attr('data-lazy-src') || $img.attr('src') || '';
  if (src.startsWith('data:')) return '';
  return src.replace(/-\d+x\d+(\.\w+)$/, '$1');
}

/** Walks a container and emits a flat list of content blocks in document order. */
function toBlocks($, root) {
  const blocks = [];
  const push = (b) => {
    const prev = blocks[blocks.length - 1];
    if (prev && JSON.stringify(prev) === JSON.stringify(b)) return;
    blocks.push(b);
  };

  const walk = (el) => {
    $(el)
      .children()
      .each((_, node) => {
        const $n = $(node);
        const tag = node.tagName.toLowerCase();
        const cls = $n.attr('class') || '';
        if (/saboxplugin|sharedaddy|post-tag|elementor-hidden|screen-reader/.test(cls)) return;
        if (['script', 'style', 'noscript', 'form', 'svg', 'button'].includes(tag)) return;

        if (/^h[1-6]$/.test(tag)) {
          const text = clean($n.text());
          if (text) push({ type: 'heading', level: Math.min(Math.max(+tag[1], 2), 4), text });
          return;
        }
        if (tag === 'p') {
          $n.find('img').each((__, img) => {
            const src = imgSrc($(img));
            if (src && !DECORATIVE.test(src)) push({ type: 'image', src, alt: clean($(img).attr('alt') || '') });
          });
          const html = inlineHtml($, node).trim();
          if (clean($n.text())) push({ type: 'paragraph', html });
          return;
        }
        if (tag === 'ul' || tag === 'ol') {
          const items = $n
            .children('li')
            .map((__, li) => inlineHtml($, li).trim())
            .get()
            .filter(Boolean);
          if (items.length) push({ type: 'list', ordered: tag === 'ol', items });
          return;
        }
        if (tag === 'table') {
          const rows = $n
            .find('tr')
            .map((__, tr) => [
              $(tr)
                .children('td,th')
                .map((___, c) => clean($(c).text()))
                .get(),
            ])
            .get()
            .filter((r) => r.some(Boolean));
          if (rows.length) push({ type: 'table', rows });
          return;
        }
        if (tag === 'blockquote') {
          const text = clean($n.text());
          if (text) push({ type: 'quote', text });
          return;
        }
        if (tag === 'img') {
          const src = imgSrc($n);
          if (src && !DECORATIVE.test(src)) push({ type: 'image', src, alt: clean($n.attr('alt') || '') });
          return;
        }
        if (tag === 'iframe') {
          const src = $n.attr('data-src') || $n.attr('data-lazy-src') || $n.attr('src') || '';
          if (/youtube|vimeo/.test(src)) push({ type: 'video', src: src.split('?')[0] });
          return;
        }
        if (tag === 'hr') return;
        // Elementor text widgets hold bare text inside divs.
        if (cls.includes('elementor-widget-container') && !$n.children().length) {
          const text = clean($n.text());
          if (text) push({ type: 'paragraph', html: escapeHtml(text) });
          return;
        }
        if (cls.includes('elementor-video') || $n.attr('data-settings')?.includes('youtube_url')) {
          const settings = $n.attr('data-settings') || '';
          const m = settings.match(/youtube_url":"([^"]+)"/);
          if (m) {
            const url = m[1].replace(/\\\//g, '/');
            const id = url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{6,})/)?.[1];
            if (id) push({ type: 'video', src: `https://www.youtube-nocookie.com/embed/${id}` });
          }
        }
        walk(node);
      });
  };
  walk(root);
  return blocks;
}

function excerptOf(blocks) {
  const p = blocks.find((b) => b.type === 'paragraph');
  if (!p) return '';
  const text = p.html.replace(/<[^>]+>/g, '');
  return text.length > 180 ? `${text.slice(0, 177).replace(/\s+\S*$/, '')}…` : text;
}

async function extractPost(slug) {
  const $ = cheerio.load(await getHtml(slug));
  const title = clean($('#page-header h1').first().text() || $('h1').first().text());
  const date = $('meta[property="article:published_time"]').attr('content') || '';
  const cover = $('#page-header').attr('data-back') || '';
  const categories = [
    ...new Map(
      $('.post-wrapper, #page-header, .post-info, .post-detail, .post-header-wrapper, #page-content-wrapper').find('a[href*="/category/"]')
        .map((_, a) => {
          const href = $(a).attr('href') || '';
          const key = href.split('/category/')[1]?.replace(/\/$/, '') || '';
          return [[key, clean($(a).text())]];
        })
        .get()
        .filter(([k]) => k),
    ).entries(),
  ].map(([slugKey, name]) => ({ slug: slugKey, name }));
  const root = $('.post-wrapper').first();
  const blocks = toBlocks($, root).filter((b) => !(b.type === 'image' && b.src === cover));
  return { slug, title, date, cover, categories, excerpt: excerptOf(blocks), blocks };
}

async function extractLegal(slug) {
  const $ = cheerio.load(await getHtml(slug));
  const id = ($('body').attr('class') || '').match(/page-id-(\d+)/)?.[1];
  let root = $(`[data-elementor-id="${id}"]`);
  // Gutenberg pages have no Elementor wrapper; fall back to the theme's content container.
  if (!root.length) root = $('#page-content-wrapper .inner').first();
  const blocks = toBlocks($, root);
  const [first, ...rest] = blocks;
  const title = first?.type === 'heading' ? first.text : slug;
  return { slug, title, blocks: first?.type === 'heading' ? rest : blocks };
}

async function main() {
  fs.mkdirSync(path.join(OUT, 'posts'), { recursive: true });
  fs.mkdirSync(path.join(OUT, 'legal'), { recursive: true });
  fs.mkdirSync(path.join(OUT, 'landing'), { recursive: true });

  const index = [];
  for (const slug of POSTS) {
    const post = await extractPost(slug);
    const { blocks, ...meta } = post;
    fs.writeFileSync(path.join(OUT, 'posts', `${slug}.json`), JSON.stringify({ blocks }, null, 1));
    index.push(meta);
    console.log(`post  ${slug}  (${blocks.length} blocks, ${meta.categories.map((c) => c.slug).join(',')})`);
  }
  fs.writeFileSync(path.join(OUT, 'posts-index.json'), JSON.stringify(index, null, 1));

  for (const slug of LEGAL) {
    const page = await extractLegal(slug);
    fs.writeFileSync(path.join(OUT, 'legal', `${slug}.json`), JSON.stringify(page, null, 1));
    console.log(`legal ${slug}  (${page.blocks.length} blocks)`);
  }

  for (const slug of LANDING) {
    const page = await extractLegal(slug);
    const $ = cheerio.load(await getHtml(slug));
    page.seoTitle = clean($('title').first().text());
    page.description = $('meta[name="description"]').attr('content') || '';
    fs.writeFileSync(path.join(OUT, 'landing', `${slug}.json`), JSON.stringify(page, null, 1));
    console.log(`landing ${slug}  (${page.blocks.length} blocks) ${page.title}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
