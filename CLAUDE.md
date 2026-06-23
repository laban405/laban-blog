# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev        # Start development server
yarn build      # Production build
yarn start      # Start production server on port 3000
yarn lint       # ESLint via next lint
```

No test suite is configured.

## Architecture

Single-page portfolio. The rendering chain is:

```
src/app/page.tsx
  → src/components/LabanMogirePortfolio.tsx   (re-export alias)
    → src/features/portfolio/index.tsx         (assembles all sections)
      → src/features/portfolio/components/landing-sections/*.tsx
```

All portfolio content (services, skills, projects, career history) lives in one file: `src/features/portfolio/data.ts`. When updating copy or adding entries, edit only that file.

## Styling

Hybrid approach — Tailwind utilities plus custom CSS classes in `src/styles/globals.css`:

- **Custom reusable classes** (defined in globals.css): `.container`, `.card`, `.caps`, `.muted`, `.ghost-pill`, `.skill-chip`, `.sec-title`, `.hero-line`, `.career-item`, etc. Prefer these over one-off Tailwind utilities for structural/layout elements.
- **shadcn/ui tokens**: All colors are CSS variables (`hsl(var(--primary))`, etc.) defined in the `:root` and `.dark` blocks of globals.css. Theme is forced to light (`forcedTheme="light"` in layout).
- **Responsive breakpoint**: Custom `980px` (not a standard Tailwind breakpoint). Used with `max-[980px]:` and `min-[981px]:` inline Tailwind variants; nav hides and grids collapse below this width.

## Typography

Two local font families loaded in `src/app/layout.tsx`:

| CSS variable | Usage | Files |
|---|---|---|
| `var(--font-stack-sans-notch)` | All headings (`h1`–`h6`) | `public/fonts/stack/stack-sans-notch-*.ttf` |
| `var(--font-stack-sans-text)` | Body, labels, buttons | `public/fonts/mozilla/mozilla-text-*.ttf` |

Note: the body font files are in `public/fonts/mozilla/` but the CSS variable is `--font-stack-sans-text`.

## Animation

Framer Motion is the primary animation library. All entry animations check `useReducedMotion()` and short-circuit to empty objects when the user prefers reduced motion. GSAP (`@gsap/react`) is installed but used minimally.

## Shared Components

- `AnimatedButton` / `AnimatedLink` (`src/components/`) — pill-shaped interactive elements with a vertical text-slide hover effect using CSS transitions. Use these for all nav links and CTAs.
- `useActiveSection` (`src/hooks/useActiveSection.tsx`) — IntersectionObserver + scroll fallback hook for tracking the active nav section.

## Design Constraints (from DESIGN.md)

- **One accent**: Emerald (`--primary`, `#30815a` light / `#7c6af5` dark). No competing saturated accents.
- **Warm neutrals only**: Backgrounds stay warm-tinted; pure grayscale is avoided.
- **Motion**: Short ease-out transitions for emphasis, never decorative bounce.
- **Don't use**: gradient text treatments, colored side-stripe card accents, SaaS dashboard patterns.

## Deploy

Production deploy is Docker-based via `deploy.sh`:

1. Builds image `laban405/laban-blog:<git-sha>`
2. Pushes to Docker Hub
3. SSH deploys to production server, running container on `port 80 → 3000`

Required environment variables: `DOCKER_PASSWORD`, `DOCKER_USER`, `SSH_KEY` (base64), `SERVER_PUBLIC_KEY` (base64), `SERVER_IP`.

The project also has Vercel configuration artifacts but the primary deploy path is the Docker/SSH script.
