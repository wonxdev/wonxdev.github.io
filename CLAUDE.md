# CLAUDE.md

# Project

Production portfolio website for **wonxdev**.

Purpose:
Show software engineering ability through both code quality and design.

Site should feel polished, maintainable, fast, and professional.

---

# Stack

- HTML
- CSS
- Vanilla JavaScript (ES Modules)
- Vite

No frameworks.

No client-side router.

No virtual DOM.

No unnecessary dependencies.

---

# Main Goals

Priority order:

1. Production quality
2. Architecture
3. Performance
4. Accessibility
5. Maintainability
6. Responsive design
7. Visual polish

Every change should improve the project.

Never lower code quality for speed.

---

# Architecture

Components are plain functions returning HTML strings.

```
App()

├── Navbar()
├── Hero()
├── About()
├── Projects()
│   └── ProjectCard()
├── Skills()
├── Timeline()
├── Contact()
└── Footer()
```

App builds one HTML string.

main.js injects HTML once.

No re-rendering.

No reactive system.

Interactive code belongs only inside:

```
src/scripts/
```

Components return markup only.

Keep rendering and behavior separate.

---

# Folder Rules

components/

- reusable UI
- HTML only

data/

- portfolio content
- links
- navigation
- projects
- timeline
- profile

Never hardcode repeated content inside components.

scripts/

- DOM behavior
- animations
- scrolling
- interactions

styles/

- presentation only

assets/

- static files

---

# Data Rules

Content belongs inside:

```
src/data/
```

Never hardcode:

- text
- links
- projects
- skills
- timeline
- navigation
- socials

New content:

1. update data
2. render data

Never the opposite.

Site updates should require data edits, not architecture edits.

---

# Coding Rules

Understand nearby files before editing.

Preserve architecture.

Prefer extension over replacement.

Reuse existing utilities.

Reuse existing components.

Small functions.

Single responsibility.

Readable over clever.

Named exports.

Alphabetical imports.

Semantic HTML.

Use CSS variables.

Never duplicate CSS.

Never duplicate logic.

Never create placeholder implementations.

Never leave TODO comments.

Never rewrite architecture unless required.

---

# Production Checklist

Always improve:

- responsiveness
- accessibility
- Lighthouse
- SEO
- maintainability
- consistency
- performance
- readability

Remove:

- dead code
- duplicate code
- unused imports
- unused CSS

Verify:

- imports
- console
- responsive layout
- documentation

---

# Content

Portfolio should feel real.

Avoid generic text.

Every section should have purpose.

Hero

- clear identity
- value
- strong first impression

About

- concise
- technical
- personal enough

Projects

Explain:

- problem
- solution
- technologies
- impact
- result

Timeline

Tell career progression.

Oldest

↓

Newest

Each item should include:

- year
- title
- subtitle
- description
- technologies
- optional links

Never invent facts.

If information missing, ask or leave data unchanged.

---

# Navigation Goal

Replace floating top navbar.

Desktop:

- fixed left sidebar
- full height
- logo top
- navigation center
- socials bottom
- active section highlight

Mobile:

- hide sidebar
- menu button
- slide-out drawer
- overlay
- ESC closes
- outside click closes
- focus trap
- prevent background scroll

One navigation source.

No duplicated navigation.

---

# UI Style

Minimal.

Dark.

Premium.

Balatro-inspired.

Never copy Balatro directly.

Large spacing.

Clean typography.

Soft corners.

Strong hierarchy.

Consistent spacing.

Subtle personality.

Every element should feel intentional.

---

# Animations

Purpose first.

Keep short.

Keep smooth.

Respect:

prefers-reduced-motion

Prefer:

- opacity
- transform

Avoid:

- layout animations
- excessive motion

---

# Performance

Target:

- Performance 95+
- Accessibility 100
- SEO 100
- Best Practices 100

Prefer:

- CSS over JS
- transform over top/left
- opacity animations
- lazy loading
- compressed assets
- IntersectionObserver
- passive listeners
- debounced resize

Avoid:

- layout thrashing
- unnecessary listeners
- oversized DOM

---

# Accessibility
Always include:
- semantic HTML
- proper headings
- keyboard navigation
- visible focus
- aria labels
- alt text
- color contrast
- reduced motion support
Accessibility is required.

---

# Responsive
Desktop first.

Support:
- 1920+
- 1440
- 1280
- 1024
- 768
- 480
- 360

Never allow:
- horizontal scrolling
- clipped content
- overflowing text
- broken layouts

---

# CSS
Reuse variables.
Keep specificity low.
Prefer:
- Flexbox
- Grid
Avoid:
- !important
- deep selectors
- magic numbers
Group related styles.

---

# JavaScript
Modern ES Modules.
No globals.
Keep functions small.
Early return.
Descriptive names.
Avoid unnecessary abstraction.

---

# SEO
Maintain:
- title
- description
- canonical
- Open Graph
- Twitter card
- JSON-LD
- robots
- sitemap
- favicon
- manifest
Correct heading hierarchy.

---

# Before Finish
Check:
- layout
- responsive
- console
- keyboard navigation
- mobile menu
- animations
- links
- buttons
- accessibility
- performance
- SEO
- dead code
- imports
- documentation

---

# Definition of Success
A developer should understand the project in under 30 minutes.
A new project should be added by editing only data files.
Architecture should stay stable as content grows.
Website should feel production-ready.

---

# Response Style
Use caveman English.
Short.
Direct.
No fluff.
Examples:
Bad:
"Refactored implementation for improved maintainability while preserving architectural consistency."
Good:
"Removed duplicate CSS.
Reused existing component.
No behavior changed."
Keep token usage low.