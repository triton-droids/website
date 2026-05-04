# Triton Droids Website — AI Agent Guide

React + Vite + Tailwind CSS site for Triton Droids, UCSD's humanoid robotics club.

## Setup & Commands

```bash
npm install           # Install dependencies
npm run dev           # Dev server at http://localhost:5173
npm run build         # Production build
npm run lint          # ESLint — zero warnings policy
npm run lint:fix      # Auto-fix lint issues
npm run format        # Prettier
npm run typecheck     # tsc --noEmit
npm run test:e2e      # Playwright e2e tests
```

## Project Structure

```
src/
  components/     # Reusable components (Typography, Header, Footer, Layout, Carousel)
  pages/          # One folder per route: src/pages/PageName/PageName.tsx
                  # Page-specific components: src/pages/PageName/components/
  assets/         # Static assets (images, icons)
  App.tsx         # React Router routes
  index.css       # Global styles + Tailwind imports
docs/             # Full project documentation
e2e/              # Playwright test specs
```

## Documentation

Always read the relevant `docs/` file before implementing or modifying features:

| File                  | Purpose                                |
| --------------------- | -------------------------------------- |
| `docs/development.md` | Dev setup, conventions, workflow       |
| `docs/components.md`  | Existing components and usage patterns |
| `docs/typography.md`  | Typography system                      |
| `docs/pages/`         | Page-specific documentation            |
| `docs/deployment.md`  | Deployment procedures                  |

## Conventions

### Typography

Never use raw HTML heading/paragraph tags. Use the shared components:

```tsx
import { HeroHeading, SectionHeading, CardTitle, BodyText } from '../components/Typography';

<HeroHeading>Page Title</HeroHeading>       // h1
<SectionHeading>Section</SectionHeading>    // h2
<CardTitle>Card Header</CardTitle>           // h3
<BodyText size="lg">Subtitle</BodyText>      // p — size: sm | base | lg
```

### Styling

- Tailwind utility classes — prefer over custom CSS
- Custom color tokens (defined in `tailwind.config.js`):
  - `bg-main-bg`, `text-main-text`, `text-muted-text`, `text-accent`, `bg-accent`
- Mobile-first responsive breakpoints: `md:` (768px), `lg:` (1024px), `xl:` (1280px), `2xl:` (1536px)

### TypeScript

- Define interfaces for all component props
- No `any` types — use precise types throughout
- PascalCase component names matching their filenames

### Components & Pages

- Wrap all pages with the `Layout` component
- Check `docs/components.md` before creating new components — reuse where possible
- One component per file
- Page-specific components go in `src/pages/PageName/components/`

### Adding a New Page

1. Create `src/pages/NewPage/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add nav link in `src/components/Header.tsx` if needed
4. Wrap content in `<Layout>`

### Code Quality Gates

Before considering a task complete, verify:

```bash
npm run lint       # must pass with zero warnings
npm run typecheck  # must pass
npm run build      # must succeed
```

### Git

- Branch naming: `feature/`, `fix/`, `docs/`, `chore/`
- Commit style (conventional commits): `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`
