# UEMS Pulse — UEMS Ventures website

[![CI/CD](https://github.com/spacesdrive/uems-pulse/actions/workflows/ci-cd.yml/badge.svg?branch=main)](https://github.com/spacesdrive/uems-pulse/actions/workflows/ci-cd.yml)

React 19 + TypeScript + Vite + Tailwind CSS v4. Content and information architecture come from uemsventures.com; the visual language follows the Pulse AI reference design.

**Live:** https://uems-pulse.spacesdrive.cc (Cloudflare Workers static assets, deployed automatically from `main`).

Requires Node.js 22 (see `.nvmrc`).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:5173 |
| `npm run build` | Generates `sitemap.xml`/`robots.txt`, type-checks, builds to `dist/` |
| `npm run preview` | Serves the production build with Vite |
| `npm run preview:worker` | Serves `dist/` through the local Cloudflare runtime (SPA fallback + `_headers`) on http://localhost:8787 |
| `npm run lint` | ESLint (fails on any warning) |
| `npm run typecheck` | `tsc -b` across app, tests and config |
| `npm test` | Vitest unit, component and integration tests (`test:watch`, `test:coverage` also available) |
| `npm run verify:dist` | Checks the built artifact: CSP covers inline scripts, no source maps or secrets |
| `npm run smoke -- <url>` | Post-deploy smoke test against a live URL |
| `npm run content` | Re-extracts blog posts, news/events, legal and landing pages from uemsventures.com into `src/data/generated/` (HTML cached in `.cache/html`) |
| `npm run assets` | Downloads every image referenced in `src/data/**` and writes optimised 640w/1280w WebP files to `public/images/` |

After editing content that adds new image URLs, run `npm run assets`.

## Structure

```text
src/
├── components/   Reusable UI (Button, Img, Accordion, Marquee, ContactForm, QuizDialog, …)
├── sections/     Page sections (PageHero, FeatureGrid, CardGrid, DataTable, Steps, CtaBand, …)
│   └── home/     Homepage-only sections
├── pages/        Route modules (each lazily loaded)
├── layouts/      RootLayout, Header, Footer
├── data/         All copy and structured content
│   ├── pages/    One file per data-driven page (rendered by ContentPage)
│   └── generated/ Extracted posts / legal / landing pages (do not hand-edit)
├── hooks/        useRevealObserver (one shared IntersectionObserver for scroll reveals)
├── lib/          image URL mapping, icon registry, helpers
└── styles/       Tailwind theme tokens + component classes
tests/
├── unit/         Helpers, post data, sanitizer, generated-content safety and asset integrity
├── components/   ContactForm, Accordion, SmartLink, Img, Seo
└── integration/  Real route table in a memory router (every page, redirects, 404, mobile menu)
scripts/          Content/asset pipelines, sitemap generation, dist verification, smoke test
```

### Adding or editing a page

Most inner pages are pure data. Create `src/data/pages/<slug>.ts` exporting a `ContentPageData`
(a hero plus a list of typed `Section`s such as `split`, `features`, `cards`, `table`, `steps`, `faq`,
`team`, `testimonials`, `expert`, `cta`). The page is served at `/<slug>` automatically and gets
its own code-split chunk.

### Images

Content keeps canonical source URLs (e.g. `https://uemsventures.com/wp-content/uploads/...`).
`src/lib/image.ts` maps each URL to the local optimised files, so the site never hot-links the
old WordPress server. Missing images render a branded fallback instead of a broken icon.

## Deployment

Pushes to `main` that touch anything other than documentation run the
[CI/CD workflow](.github/workflows/ci-cd.yml): lint → type check → tests → security checks →
build → artifact verification → Cloudflare deploy → production smoke test. Pull requests run
the same validation without deploying. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) for the
full setup, required secrets, token scope, rollback and rotation.

- It is a single-page app: unknown paths fall back to `index.html` (`not_found_handling` in
  `wrangler.jsonc`) and the client router renders the page or its 404.
- Security headers and caching rules live in `public/_headers`. If you change the inline
  script in `index.html`, update its CSP hash (`npm run verify:dist` tells you the new value).
- `SITE_URL` sets the origin advertised in `sitemap.xml`/`robots.txt` (CI sets it to the live URL).
- Enquiry forms have no backend yet. Submitting opens a pre-filled email to
  `info@uemsventures.com`, with WhatsApp offered as an alternative. To capture leads
  server-side, point `ContactForm` at a form endpoint.
