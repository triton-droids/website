# Deployment Guide

The Triton Droids website is hosted on **Vercel** with automatic deployments triggered by pushes to `main`.

## How It Works

| Event | Result |
|-------|--------|
| Push to `main` | Production deployment at the live URL |
| Open a Pull Request | Preview deployment (Vercel bot posts the URL in the PR) |

No manual steps are needed — Vercel picks up changes automatically once the project is connected.

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

## Environment Variables

If the project needs environment variables (e.g., API keys):

1. Add them in the Vercel dashboard: **Project → Settings → Environment Variables**
2. For CI use, add them as **GitHub Actions secrets**: **Settings → Secrets and variables → Actions**
3. Reference in workflow files: `${{ secrets.VARIABLE_NAME }}`

Currently no environment variables are required.

## Rollback

1. In the Vercel dashboard, open **Deployments**
2. Find a previous successful deployment and click **Promote to Production**

Or revert the commit on `main` — Vercel will redeploy automatically.

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| Build fails in CI | Run `npm run build` locally and fix errors |
| Lint/type errors | Run `npm run lint` and `npm run typecheck` |
| Playwright failures | Run `npm run test:e2e` locally with `npx playwright install` |
| Site not updating | Check Vercel dashboard for deployment status; clear browser cache |
