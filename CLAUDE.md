# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Casa Patron Astro is a luxury vacation rental website for a property in Alto, New Mexico. Built with Astro 5, React 19, and Tailwind CSS 4. Static site generation with selective React hydration for interactive components.

**Live site:** https://casapatronalto.com
**Deployment:** Netlify (auto-deploys from main branch)

## Commands

```bash
pnpm dev          # Dev server at localhost:4321
pnpm build        # Production build to ./dist/
pnpm preview      # Preview production build
pnpm lint         # ESLint check
pnpm lint:fix     # Auto-fix lint issues
pnpm lint:check   # Strict lint (fails on warnings)
```

There is no test suite configured.

## Architecture

### Static-First with Islands

- Astro generates static HTML at build time (`output: "static"`)
- React components hydrate only where needed using `client:load` directive
- React integration is scoped to `**/react/**/*` — React components must live in `src/components/react/`
- Three React components: Header.jsx (navigation + hero), LocalAttractions.jsx (interactive filtered list), BackToTopButton.jsx

### Content Collections (Astro 5 Content Layer API)

Uses the modern Astro 5 Content Layer API with `glob()` loaders. Config is at `src/content.config.ts`. Collections use `render()` imported from `astro:content` and `entry.id` instead of legacy `entry.slug`/`entry.render()`. Two collections are defined:

- **docs/** - Guest documentation (house rules, amenities, etc.) - excluded from sitemap, noIndex
- **posts/** - Blog articles with images, categories, tags

Local attractions data (`src/content/local-attractions/local-attractions.ts`) is a typed TypeScript export, **not** an Astro content collection. It contains seasonal events with dates and pricing that require periodic updates to stay current.

### Tailwind CSS v4

Uses the new Tailwind v4 `@theme` directive in `src/styles/global.css` — there is no `tailwind.config` file. The Tailwind Vite plugin is configured in `astro.config.mjs`.

Custom utilities defined via `@utility`:
- `text-shadow`, `text-shadow-md`, `text-shadow-lg`, `text-shadow-none`

### Path Aliases

```typescript
@/*            → src/*
@/components/* → src/components/*
@/layouts/*    → src/layouts/*
@/assets/*     → src/assets/*
@/utils/*      → src/utils/*
```

### SEO Implementation

`src/components/SEO.astro` handles:
- Open Graph and Twitter Card meta tags
- JSON-LD schema markup (LodgingBusiness, ContactPage types)
- Breadcrumb schema generation
- Geo location tags with coordinates
- Per-page noIndex control

## Key Files

- `src/layouts/BaseLayout.astro` - Main template wrapping all pages (Header hydrated here with `client:load`)
- `src/components/react/Header.jsx` - Navigation with mobile menu state, hero image display, scroll behavior
- `src/pages/index.astro` - Homepage (26+ image imports)
- `src/content/local-attractions/local-attractions.ts` - Typed activities database requiring periodic updates
- `src/content.config.ts` - Astro 5 Content Layer collection definitions
- `src/styles/global.css` - Tailwind v4 `@theme` config, custom `@utility` definitions, and animations

## Brand Colors

```css
--color-primary: #fee43a          /* Casa Patron signature yellow */
--color-secondary: #1c68cb        /* Mountain sky blue */
--color-tertiary: #ff715b         /* Sunset orange accent */
--color-grey-neutral: #273240     /* Text */
--color-success: #28d679          /* Success green */
```

## Image Handling

- Import images in `.astro` files, use `<Image />` from `astro:assets`
- Sharp handles WebP conversion and optimization automatically
- Assets stored in `src/assets/`

## Dynamic Routes

- `src/pages/docs/[...slug].astro` - Renders content from docs collection
- `src/pages/posts/[...slug].astro` - Renders content from posts collection

## Environment

```
GOOGLE_ANALYTICS_ID=G-MHCSPPZ3GY
```

Analytics runs off-thread via Partytown integration.
