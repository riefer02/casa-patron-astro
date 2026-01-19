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

## Architecture

### Static-First with Islands

- Astro generates static HTML at build time
- React components hydrate only where needed using `client:load` directive
- Three React components: Header.jsx (navigation), LocalAttractions.jsx (interactive list), BackToTopButton.jsx

### Content Collections

Astro's type-safe content layer with Zod schemas in `src/content/config.ts`:

- **docs/** - Guest documentation (house rules, amenities, etc.) - excluded from sitemap, noIndex
- **posts/** - Blog articles with images, categories, tags
- **local-attractions/** - Event data in `local-attractions.js` (12 entries with dates, pricing, tags)

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
- Geo location tags with coordinates
- Per-page noIndex control

## Key Files

- `src/layouts/BaseLayout.astro` - Main template wrapping all pages
- `src/components/react/Header.jsx` - Complex navigation with mobile menu state
- `src/pages/index.astro` - Homepage (26+ image imports)
- `src/content/local-attractions/local-attractions.js` - Activities database requiring periodic updates
- `src/styles/global.css` - Tailwind theme config and custom animations

## Brand Colors

```css
--color-primary-yellow: #fee43a   /* Casa Patron signature */
--color-secondary-blue: #1c68cb   /* Mountain sky */
--color-tertiary-orange: #ff715b  /* Sunset accent */
--color-grey-neutral: #273240     /* Text */
```

## Image Handling

- Import images in `.astro` files, use `<Image />` from `astro:assets`
- Sharp handles WebP conversion and optimization automatically
- Assets stored in `src/assets/` (43 optimized images)

## Dynamic Routes

- `src/pages/docs/[...slug].astro` - Renders content from docs collection
- `src/pages/posts/[...slug].astro` - Renders content from posts collection

## Environment

```
GOOGLE_ANALYTICS_ID=G-MHCSPPZ3GY
```

Analytics runs off-thread via Partytown integration.
