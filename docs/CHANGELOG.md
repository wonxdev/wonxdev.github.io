# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project follows Semantic Versioning.

## [1.0.0] - Production ready

### Added
- Complete SEO metadata: canonical URL, Open Graph tags, Twitter/X card tags, JSON-LD structured data
- Generated favicon set (`favicon.ico`, `favicon.svg`, `icon-192.png`, `icon-512.png`) matching the design system
- Generated Open Graph social preview image (`assets/images/og-image.png`)
- Populated `manifest.webmanifest` with icons, theme colors, and relative scope for subpath-safe installs
- Populated `sitemap.xml`
- Branded `404.html` for GitHub Pages
- `vite.config.js` using a relative build base so the site works from a custom domain, a GitHub user page, or a GitHub project page subpath
- `.github/workflows/deploy.yml` GitHub Actions workflow for automatic build + deploy to GitHub Pages on push to `main`

### Removed
- Unused empty scaffolding directories (`config/`, `data/`, `pages/`, `assets/icons/`, `assets/fonts/`)

### Verified
- `npm install` and `npm run build` complete without errors or warnings
- Production build serves correctly with relative asset paths

## [Unreleased]

### Added
- Premium portfolio content structure
- Refined about section with principle-driven copy
- Expanded project data with richer case studies
- Footer call-to-action and metadata block

### Changed
- Reworked hero messaging to feel more premium and intentional
- Updated section headers and spacing for a calmer editorial rhythm
- Softened the visual system with revised tokens, surfaces, and motion
- Simplified the interaction layer to emphasize subtle elevation over gimmicks

### Improved
- Refined navigation, button, and card states for a more polished experience
- Tightened typography scale and section layout for stronger hierarchy
- Reduced visual noise while preserving the existing modular architecture

### Refactored
- Streamlined component markup to keep responsibilities focused and data-driven
- Removed unused initialization logic to keep the scripts aligned with current behavior