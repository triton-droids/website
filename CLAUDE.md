# Triton Droids Website — Claude Code Guide

React + Vite + Tailwind CSS site for Triton Droids, UCSD's humanoid robotics club.

## Commands

```bash
npm run dev           # Start dev server (http://localhost:5173)
npm run build         # Production build
npm run lint          # ESLint (zero warnings policy)
npm run lint:fix      # Auto-fix lint issues
npm run format        # Prettier format
npm run typecheck     # TypeScript check (tsc --noEmit)
npm run test:e2e      # Playwright e2e tests
npm run test:e2e:ui   # Playwright interactive UI
npm run size          # Build + enforce bundle size budgets
npm run size:check    # Check budgets against existing dist/
```

## Project Structure

```
src/
  components/     # Reusable components (Typography, Header, Footer, Layout, Carousel)
  pages/          # Page components — src/pages/PageName/PageName.tsx
                  # Page-specific components in src/pages/PageName/components/
  assets/         # Static assets
  App.tsx         # Routing
  index.css       # Global styles + Tailwind
docs/             # Full documentation (components, typography, pages, development, deployment)
e2e/              # Playwright test specs
```

## Key Conventions

### Always consult `docs/` before making changes

- `docs/development.md` — conventions, workflow, code quality
- `docs/components.md` — reusable components and usage patterns
- `docs/typography.md` — typography system
- `docs/pages/` — page-specific documentation
- `docs/deployment.md` — deployment procedures

### Typography — use components, never raw HTML tags

```tsx
import { HeroHeading, SectionHeading, CardTitle, BodyText } from '../components/Typography';

<HeroHeading>Page Title</HeroHeading>       // h1
<SectionHeading>Section</SectionHeading>    // h2
<CardTitle>Card Header</CardTitle>           // h3
<BodyText size="lg">Subtitle</BodyText>      // p, size: sm | base | lg
```

### Styling

- Tailwind utility classes — prefer over custom CSS
- Custom color tokens: `bg-main-bg`, `text-main-text`, `text-muted-text`, `text-accent`, `bg-accent`
- Mobile-first responsive: `md:` (768px), `lg:` (1024px), `xl:` (1280px), `2xl:` (1536px)

### TypeScript

- Define interfaces for all component props — no `any` types
- PascalCase component names matching their file names

### Components

- Wrap all pages in the `Layout` component
- Check `docs/components.md` before creating new components
- One component per file; co-locate page-specific components under their page folder

### Git

- Branches: `feature/`, `fix/`, `docs/`, `chore/`
- Commit style: `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`

## Allowed Tools

- `Bash(npm run dev:*)`, `Bash(npm run lint)`, `Bash(npm install:*)`, `Bash(curl:*)`
- `Bash(npx playwright test:*)`, `Bash(npx playwright install chromium)`
