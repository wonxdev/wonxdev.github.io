# Folder Structure

## Objective

The repository must use a file-based, modular structure optimized for:

- static generation or hybrid rendering
- content-driven updates without code changes
- scalable portfolio expansion
- clear separation between UI, content, and configuration

The structure is framework-agnostic but aligned with a modern React/Next.js-style architecture.

---

# Root Structure


/
├── app/
├── components/
├── content/
├── public/
├── styles/
├── lib/
├── hooks/
├── types/
├── config/
├── scripts/
├── docs/
├── .github/
├── package.json
├── README.md
├── CHANGELOG.md
├── LICENSE
├── AI_CONTEXT.md
├── CNAME
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
└── 404.html


---

# Application Layer

## /app

Defines all routes and pages.


app/
├── layout.tsx
├── page.tsx # Home
├── about/
│ └── page.tsx
├── projects/
│ ├── page.tsx # Projects listing
│ └── [slug]/
│ └── page.tsx # Individual project page
├── skills/
│ └── page.tsx
├── timeline/
│ └── page.tsx
├── blog/
│ ├── page.tsx
│ └── [slug]/
│ └── page.tsx
└── not-found.tsx


---

# Content Layer (File-Based CMS)

## /content

All editable data lives here. No UI logic allowed.


content/
├── profile/
│ └── about.json
├── skills/
│ └── skills.json
├── timeline/
│ └── timeline.json
├── projects/
│ ├── project-slug-1/
│ │ ├── index.json
│ │ ├── images/
│ │ └── assets/
│ ├── project-slug-2/
│ │ ├── index.json
│ │ ├── images/
│ │ └── assets/
├── blog/
│ ├── post-slug-1.md
│ ├── post-slug-2.md
└── navigation/
└── nav.json


### Rules

- Each project must be isolated in its own folder
- All metadata stored in `index.json`
- Media stored inside project-scoped directories
- Blog uses Markdown for portability
- No hardcoded content in UI components

---

# Components Layer

## /components

Reusable UI and layout primitives.


components/
├── layout/
│ ├── Header.tsx
│ ├── Footer.tsx
│ ├── Navigation.tsx
│ └── Container.tsx
├── ui/
│ ├── Button.tsx
│ ├── Card.tsx
│ ├── Badge.tsx
│ ├── Typography.tsx
│ └── Image.tsx
├── sections/
│ ├── Hero.tsx
│ ├── ProjectGrid.tsx
│ ├── SkillsGrid.tsx
│ ├── TimelineView.tsx
│ └── BlogPreview.tsx
└── mdx/
└── MarkdownRenderer.tsx


---

# Styling Layer

## /styles

Design system + global styles.


styles/
├── globals.css
├── reset.css
├── tokens.css
├── typography.css
└── design-system.json


### Rules

- Design tokens are single source of truth
- No inline styling outside controlled overrides
- Consistent spacing, color, and typography system required

---

# Logic Layer

## /lib

Shared utilities and data access layer.


lib/
├── content/
│ ├── projects.ts
│ ├── blog.ts
│ ├── skills.ts
│ └── timeline.ts
├── seo.ts
├── format.ts
├── fetchers.ts
└── constants.ts


---

# Hooks Layer

## /hooks

Custom React hooks.


hooks/
├── useTheme.ts
├── useScroll.ts
├── useProjects.ts
└── useMediaQuery.ts


---

# Types Layer

## /types

Centralized TypeScript definitions.


types/
├── project.ts
├── blog.ts
├── timeline.ts
├── skill.ts
└── global.ts


---

# Configuration Layer

## /config

Global configuration and metadata.


config/
├── site.json
├── seo.json
├── navigation.json
├── social.json
└── design-system.json


### Responsibilities

- site metadata
- SEO defaults
- navigation structure
- social links
- theme configuration

---

# Public Assets

## /public

Static assets served directly.


public/
├── assets/
│ ├── images/
│ ├── icons/
│ └── projects/
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest
└── 404.html


---

# Scripts Layer

## /scripts

Automation utilities.


scripts/
├── generate-sitemap.ts
├── validate-content.ts
└── build-check.ts


---

# Documentation Layer

## /docs

Internal project documentation.


docs/
├── architecture.md
├── deployment.md
├── content-guide.md
└── design-system.md


---

# Content Update Model

All typical updates must occur in `/content` only:

- adding projects → `/content/projects/`
- editing project details → `index.json`
- updating skills → `/content/skills/skills.json`
- updating timeline → `/content/timeline/timeline.json`
- writing blog posts → `/content/blog/*.md`

No UI component edits required for content changes.

---

# Design System Constraint

All UI must strictly consume:

- `/styles/design-system.json`
- `/styles/tokens.css`

No ad-hoc styling outside system tokens is permitted.

---

# Architectural Constraint

- UI layer never directly defines content
- Content layer never imports UI logic
- Lib layer is the only bridge
- Pages only compose components and data

---

# Deployment Compatibility

Structure must support:

- static export
- GitHub Pages hosting
- CI/CD build via `npm run build`
- zero manual file modification after clone