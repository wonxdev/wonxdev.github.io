# Coding Standards

This document defines the coding standards for the wonxdev Website. Every contributor, including AI assistants, must follow these rules.

---

# Core Principles

The project prioritizes:

1. Simplicity
2. Accessibility
3. Performance
4. Visual Consistency
5. Maintainability
6. Developer Experience
7. Readability
8. Scalability

When two approaches are valid, choose the simpler one.

---

# General Rules

- Never duplicate code.
- Never leave placeholder content.
- Never leave dead code.
- Never ignore console warnings or errors.
- Never break existing architecture.
- Prefer improving existing code over rewriting it.
- Reuse components before creating new ones.
- Keep solutions simple.
- Every file should have a single responsibility.

---

# JavaScript Standards

## Naming

- Variables: camelCase
- Functions: camelCase
- Components: PascalCase
- Constants: UPPER_SNAKE_CASE
- CSS Classes: kebab-case
- Files: PascalCase for components, camelCase for utilities and data

Examples:

```js
const heroCards = [];

function renderProjects() {}

export function ProjectCard() {}

const MAX_PROJECTS = 6;
```

---

## Imports

Always alphabetize imports.

Example:

```js
import { About } from "./About";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
```

---

## Exports

Prefer named exports.

Good:

```js
export function Hero() {}
```

Avoid:

```js
export default Hero;
```

---

## Functions

Functions should do one job.

Instead of one large function:

```
Render page
↓

Render section

↓

Render component
```

Break logic into reusable functions.

---

## Data

Never hardcode repeated data inside components.

Application data belongs inside:

```
src/data/
```

Components should render data, not own it.

---

# Component Standards

Every component has one responsibility.

Example:

```
Projects

↓

ProjectCard

↓

Button
```

Avoid large files that handle multiple UI elements.

Reusable UI should become reusable components.

---

# Folder Standards

Everything should be alphabetically ordered whenever practical.

Example:

```
components/

About.js

Footer.js

Hero.js

Navbar.js

ProjectCard.js

Projects.js

Skills.js

Timeline.js
```

The same applies to:

- CSS selectors
- Imports
- Data files
- Assets
- Documentation

---

# CSS Standards

Use vanilla CSS only.

Responsibilities:

```
variables.css
Design tokens only

layout.css
Layout and responsive structure

components.css
Component styling

utilities.css
Reusable helper classes

animations.css
Animations only
```

---

## CSS Rules

- No inline styles.
- No !important.
- Prefer CSS variables.
- Prefer reusable utility classes.
- Do not duplicate component styles.
- Keep transitions consistent across the project.

---

# UI Standards

Prefer:

- whitespace
- typography
- spacing
- hierarchy

instead of decoration.

Animations should support usability, not distract from it.

Cards should lift slightly.

Buttons should lift slightly and compress on click.

Avoid excessive motion.

---

# Accessibility

Accessibility is required.

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Descriptive button labels
- Descriptive links
- Proper heading hierarchy
- Sufficient color contrast
- Images must include alt text

Target:

Lighthouse Accessibility ≥ 95

---

# Performance

Target:

- Lighthouse Performance ≥ 95
- Lighthouse Best Practices ≥ 95
- Lighthouse SEO ≥ 95

Requirements:

- Optimize images.
- Avoid unnecessary JavaScript.
- Avoid unnecessary DOM elements.
- Remove unused CSS.
- Remove unused JavaScript.

---

# Dependencies

Prefer native browser APIs.

Avoid adding packages unless they provide significant long-term value.

Do not introduce:

- CSS frameworks
- jQuery
- UI libraries

without strong justification.

---

# Documentation

Documentation is part of the project.

Whenever functionality changes:

Update:

- README.md
- CHANGELOG.md

Documentation should accurately reflect the repository.

---

# Git Workflow

Protected branches:

```
main
Production

develop
Integration
```

Feature work should use:

```
feature/<name>
```

Bug fixes:

```
fix/<name>
```

Use Conventional Commits.

Examples:

```
feat(hero): redesign hero section

fix(nav): correct active link detection

refactor(projects): extract project card

docs(readme): update project structure

style(buttons): improve hover animation
```

Never commit directly to main.

---

# AI Contributor Rules

Before making changes:

1. Read the relevant files.
2. Understand the existing architecture.
3. Reuse existing components.
4. Avoid unnecessary rewrites.

After making changes:

- Remove dead code.
- Verify imports.
- Check for console errors.
- Update documentation.
- Preserve alphabetical ordering.

Never generate incomplete implementations.

Never leave TODO comments.

Never leave placeholder content.

Never sacrifice simplicity for cleverness.

---

# Definition of Good Code

Good code is:

- Simple
- Predictable
- Consistent
- Accessible
- Performant
- Easy to maintain

The best solution is usually the one another developer can understand immediately.