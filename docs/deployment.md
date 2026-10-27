# Deployment Guide

The Triton Droids website is deployed to **Cloudflare Pages** using a GitHub Actions workflow.

## How It Works

| Event                            | Result                                    |
| -------------------------------- | ----------------------------------------- |
| Push to `main`                   | Production deployment to Cloudflare Pages |
| Manual run (`workflow_dispatch`) | On-demand deployment from GitHub Actions  |

Deployments are handled by `.github/workflows/cloudflare-pages.yml` and use `cloudflare/wrangler-action@v3` with `wrangler pages deploy`.

## One-Time Setup

1. Create a Cloudflare Pages project in your Cloudflare account.
2. In GitHub, go to **Settings → Secrets and variables → Actions**.
3. Add these repository **secrets**:
   - `CLOUDFLARE_API_TOKEN` (token with `Cloudflare Pages:Edit` permission)
   - `CLOUDFLARE_ACCOUNT_ID` (Cloudflare account ID)
4. Add this repository **variable**:
   - `CLOUDFLARE_PAGES_PROJECT_NAME` (exact Cloudflare Pages project name)

## Client-Side Routing (Direct Links)

The site is a single-page app: `BrowserRouter` (`src/main.tsx`) renders every page from one `index.html`, and in-site navigation uses React Router's `<Link>` without requesting a new page from the server. A pasted or refreshed URL like `/sponsorship` does hit the server, though, and there is no `sponsorship.html` on disk — so the host must fall back to `index.html` for unknown paths.

| Host             | Fallback behavior                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------- |
| Cloudflare Pages | Automatic — serves `index.html` for unmatched paths when no `404.html` exists                        |
| Vercel           | Configured in `vercel.json` with a rewrite of `/(.*)` to `/index.html` (real files are served first) |

Do not delete `vercel.json` or add a top-level `404.html` to `public/` — either breaks direct links on one of the hosts.

## CI Checks (GitHub Actions)

Before a PR can merge, the `Build Check` workflow (`.github/workflows/ci.yml`) must pass:

1. **Lint** — `npm run lint`
2. **Typecheck** — `npm run typecheck`
3. **Format check** — `npm run format:check`
4. **Build** — `npm run build`
5. **Playwright tests** — `npm run test:e2e`

Fix any failures locally before pushing:

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
```

## Local Preview of Production Build

```bash
npm run build
npm run preview
```

## Rollback

1. In the Cloudflare Pages dashboard, open **Deployments**.
2. Redeploy a previously successful deployment.

Or revert the commit on `main` and let GitHub Actions publish the reverted state.

## Troubleshooting

| Symptom                                       | Fix                                                                                                        |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Build fails in GitHub Actions                 | Run `npm run build` locally and fix errors                                                                 |
| Missing Cloudflare credentials                | Confirm `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` are set in GitHub secrets                       |
| Wrong Pages target project                    | Confirm `CLOUDFLARE_PAGES_PROJECT_NAME` matches the Pages project exactly                                  |
| Site not updating                             | Check the `Deploy to Cloudflare Pages` workflow run logs and Cloudflare Pages deployment status            |
| Pasted link (e.g. `/sponsorship`) returns 404 | Confirm the host falls back to `index.html` — see [Client-Side Routing](#client-side-routing-direct-links) |
