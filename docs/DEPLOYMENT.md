# Deployment

UEMS Pulse is deployed to **https://uems-pulse.spacesdrive.cc** as a Cloudflare Worker that
serves only static assets. No server code runs; Cloudflare serves `dist/` from its edge.

## How it works

```text
Push to main
  → paths-ignore filter (docs-only changes stop here)
  → validate job
      npm ci --ignore-scripts → npm audit signatures → lint → type check → tests
      → npm audit (high+) → gitleaks secret scan → production build → verify:dist
      → upload dist/ artifact
  → deploy job (main only, `production` environment)
      download the same dist/ → re-verify → wrangler deploy → smoke test live URL
```

| Piece | File |
| --- | --- |
| Pipeline | `.github/workflows/ci-cd.yml` |
| Worker config (assets dir, SPA fallback, custom domain) | `wrangler.jsonc` |
| Security headers, CSP, cache rules | `public/_headers` |
| Artifact checks before deploy | `scripts/verify-dist.mjs` |
| Post-deploy checks | `scripts/smoke-test.mjs` |
| Dependency update PRs | `.github/dependabot.yml` |

### What triggers a deploy

- A push to `main` that changes anything except `**/*.md`, `docs/**`, `LICENSE`,
  `.github/dependabot.yml`, `.github/ISSUE_TEMPLATE/**` and `.vscode/**`.
- A manual run: **Actions → CI/CD → Run workflow** on `main`.

Pull requests to `main` run validation (and dependency review) but never deploy, and
never see the deploy secrets.

### Custom domain

`wrangler.jsonc` declares `uems-pulse.spacesdrive.cc` as a Workers Custom Domain.
Wrangler creates the proxied DNS record and certificate on the first deploy; no manual DNS
changes are needed. `workers_dev` and `preview_urls` are disabled, so the Worker is not
reachable on any `*.workers.dev` hostname.

## Secrets

The two deploy secrets are stored on the GitHub **`production` environment**, not as
repository-wide secrets. The environment only accepts deployments from `main`.

| Secret | Purpose |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Dedicated deploy token (scope below) |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account that owns the Worker |

Nothing in the repository contains credentials. `wrangler.jsonc` intentionally has no
`account_id`; Wrangler reads `CLOUDFLARE_ACCOUNT_ID` from the environment.

### Deploy token scope

The CI token is a dedicated, expiring Cloudflare **account API token** named
`uems-pulse-ci-deploy`, limited to:

| Scope | Permission |
| --- | --- |
| Account (this account only) | Workers Scripts: Edit, Account Settings: Read |
| Zone `spacesdrive.cc` only | Zone: Read, Workers Routes: Edit, DNS: Edit |

DNS: Edit is limited to the `spacesdrive.cc` zone. The Workers Custom Domains API needs it
to manage the domain's proxied record.

### Rotating the token

The token expires (see its `expires_on` in the Cloudflare dashboard under
**Manage Account → Account API Tokens**). Before then, or immediately if it may have leaked:

1. Create a new token with the same scope in the Cloudflare dashboard.
2. Update the secret without echoing it:
   `gh secret set CLOUDFLARE_API_TOKEN --env production --repo spacesdrive/uems-pulse`
   (paste the value at the prompt).
3. Re-run the workflow on `main`, then **delete the old token** in Cloudflare.

## Rollback

Every deploy creates a Worker version tagged with the commit SHA and run number. To roll back:

- Revert the offending commit on `main` (the pipeline redeploys), or
- Roll back immediately with `npx wrangler rollback` (or the Worker's **Deployments** tab in
  the Cloudflare dashboard), using credentials that can deploy the Worker.

## Deploying or checking locally

```bash
npm ci
npm run lint && npm run typecheck && npm test
SITE_URL=https://uems-pulse.spacesdrive.cc npm run build
npm run verify:dist
npm run preview:worker          # local Cloudflare runtime on http://localhost:8787
npm run smoke -- https://uems-pulse.spacesdrive.cc
```

Manual production deploys should be rare. If one is needed, export `CLOUDFLARE_API_TOKEN`
and `CLOUDFLARE_ACCOUNT_ID` in the shell (never in a committed file) and run `npm run deploy`.

## Troubleshooting

- **CSP and Cloudflare-injected scripts.** Web Analytics is enabled on the `spacesdrive.cc`
  zone, so Cloudflare injects its beacon into HTML responses. The CSP allows only
  `https://static.cloudflareinsights.com` (script) and `https://cloudflareinsights.com`
  (reporting). If you enable another zone feature that injects scripts (Rocket Loader, Zaraz,
  email obfuscation), add its origin to `public/_headers`, or production will log CSP errors.
- **Smoke test says "old version still served" when run locally.** The version check compares
  the live entry bundle with your local `dist/`. Tailwind's native CSS toolchain rounds a few
  colour values differently on Windows and Linux, so a Windows build hashes differently from
  CI's Linux build. In CI, the check runs against the artifact that was actually deployed.
  Locally, run `npm run smoke` without a `dist/` folder to skip the version check.
- **First run in a new repository.** GitHub may not fire `push` for the commit that creates the
  default branch. Start that run from **Run workflow**; later pushes trigger automatically.

## Security notes

- Actions are pinned to commit SHAs; Dependabot proposes updates weekly.
- The workflow token is read-only (`contents: read`), and checkouts don't persist credentials.
- Dependencies install with lifecycle scripts disabled, and registry signatures are verified.
- `verify:dist` blocks deploys that would ship source maps, env or credential files, or
  secret-looking strings, and it catches CSP hash drift.
- `.gitignore` excludes `.env*`, `.dev.vars*`, `.wrangler/`, key and certificate files, and
  credential JSON.
