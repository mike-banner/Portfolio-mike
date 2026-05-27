# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A personal portfolio site — Astro (SSG) deployed to Cloudflare Pages. Target: Lighthouse 100/100, Core Web Vitals green. Full spec in `docs/`.

## Commands

```bash
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the built site locally
```

## Architecture

- **Framework**: Astro in SSG mode — no server-side runtime, purely static output
- **Styling**: Vanilla CSS only; no CSS frameworks
- **Images**: always use Astro's `<Image />` component; output formats AVIF + WebP
- **Fonts**: self-hosted `.woff2`, never external (no Google Fonts calls)
- **Deployment**: `dist/` to Cloudflare Pages; `public/_headers` and `public/_redirects` are copied into the build as-is

## SEO & Performance Rules (from `docs/SEO-SPEC.md`)

Every page requires:
- `<title>` ≤ 60 chars, format: `Subject | Site Name`
- `<meta name="description">` 120–160 chars with a primary keyword
- `<link rel="canonical">` with absolute URL
- Full OpenGraph tags (`og:title`, `og:description`, `og:image`, `og:type`, `og:url`)
- Twitter Card tags
- `<html lang="fr">`

Performance targets:
- LCP < 1.2s — above-fold images need `fetchpriority="high"`
- CLS = 0 — all images/iframes must have explicit `width` and `height`; fonts use `font-display: swap`
- INP < 50ms — minimize JavaScript; lean into Astro's zero-JS-by-default model

Generated at build time:
- `sitemap.xml` via `@astrojs/sitemap`
- `robots.txt` pointing to the sitemap
- JSON-LD structured data: `Person` schema on the homepage, `WebSite` schema globally

## Cloudflare Deployment (from `docs/CLOUDFLARE.md`)

- Build command: `npm run build`, output: `dist/`, Node ≥ 18
- `public/_headers` sets security headers and `Cache-Control: immutable` for `/_astro/*` assets
- HTTP/3 and Brotli enabled via Cloudflare dashboard
