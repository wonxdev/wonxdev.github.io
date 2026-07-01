# Architecture

## Purpose

The wonxdev Website is a production-ready personal portfolio built with modern Vanilla JavaScript, HTML, CSS, and Vite.

The project prioritizes:

- Maintainability
- Readability
- Scalability
- Performance
- Documentation
- Clean architecture

This repository is intended to demonstrate both frontend engineering skills and professional software development practices.

---

# Architectural Principles

The project follows a simple modular architecture.

Each file has one clear responsibility.

The architecture favors composition over complexity.

No frameworks are used.

---

# Technology Stack

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)
- Vite
- Git
- GitHub

---

# Application Flow

The application follows this rendering flow:

```text
Data
        ↓

Reusable Components
        ↓

Section Components
        ↓

App
        ↓

main.js
        ↓

Browser
```

Application data is separated from presentation.

Components receive data and generate HTML.

The application entry point assembles the entire page before initializing interactive behavior.

---

# Folder Structure

```text
wonxdev/

├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   ├── logos/
│   │   └── projects/
│   │
│   ├── components/
│   │   ├── About.js
│   │   ├── BackToTop.js
│   │   ├── Badge.js
│   │   ├── Button.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── Navbar.js
│   │   ├── ProjectCard.js
│   │   ├── Projects.js
│   │   ├── ScrollProgress.js
│   │   ├── SectionHeader.js
│   │   ├── SkillChip.js
│   │   ├── Skills.js
│   │   ├── SocialLink.js
│   │   ├── Timeline.js
│   │   └── TimelineItem.js
│   │
│   ├── data/
│   │   ├── about.js
│   │   ├── navigation.js
│   │   ├── projects.js
│   │   ├── site.js
│   │   ├── skills.js
│   │   ├── socials.js
│   │   └── timeline.js
│   │
│   ├── scripts/
│   │   ├── animations.js
│   │   ├── navigation.js
│   │   ├── scrollProgress.js
│   │   ├── scrollSpy.js
│   │   └── backToTop.js
│   │
│   ├── styles/
│   │   ├── animations.css
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── layout.css
│   │   ├── reset.css
│   │   ├── utilities.css
│   │   └── variables.css
│   │
│   ├── App.js
│   └── main.js
│
├── docs/
│   ├── architecture.md
│   ├── coding-standards.md
│   ├── components.md
│   ├── deployment.md
│   ├── design-system.md
│   ├── roadmap.md
│   └── ui-principles.md
│
├── public/
│   ├── favicon.ico
│   ├── manifest.webmanifest
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── social-preview.png
│   ├── CNAME
│   └── 404.html
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── AI_CONTEXT.md
├── CHANGELOG.md
├── LICENSE
├── README.md
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
```

Each directory has a dedicated responsibility.

---

# Components

The UI is built from reusable components.

Examples include:

- Navbar
- Hero
- SectionHeader
- ProjectCard
- Projects
- About
- Skills
- Timeline
- Contact
- Footer
- Button
- Badge
- Chip

Reusable components should be preferred whenever UI begins repeating.

---

# Data Layer

All portfolio content belongs inside:

```text
src/data/
```

Examples:

```text
about.js
contact.js
navigation.js
projects.js
skills.js
socials.js
timeline.js
```

Components should never contain hardcoded portfolio content.

Adding new projects or skills should only require editing data files.

---

# Styling Architecture

Styles are organized by responsibility.

```text
styles/

animations.css
base.css
components.css
layout.css
reset.css
variables.css
```

Responsibilities:

## variables.css

Design tokens.

Examples:

- Colors
- Typography
- Radius
- Shadows
- Durations
- Spacing

---

## reset.css

Browser normalization.

No custom styling.

---

## base.css

Global typography.

Global element styling.

Default HTML elements.

---

## layout.css

Page layout.

Grid.

Flex.

Responsive layouts.

Containers.

Sections.

---

## components.css

Component-specific styling.

Each UI component owns its styles.

---

## animations.css

Animations.

Transitions.

Keyframes.

Motion utilities.

---

# Script Architecture

Scripts only initialize behavior.

They never generate HTML.

Examples:

- Navigation
- Scroll Spy
- Scroll Progress
- Card Interaction
- Animations

Behavior remains separate from presentation.

---

# Rendering Philosophy

The application renders in this order:

1. Load application data
2. Generate reusable components
3. Assemble page sections
4. Render App
5. Initialize behavior

This keeps rendering deterministic and predictable.

---

# Component Philosophy

Each component should have one responsibility.

Good examples:

ProjectCard

- Displays one project.

Projects

- Displays a collection of ProjectCards.

SectionHeader

- Displays section headings.

Navbar

- Displays navigation.

Components should remain small and reusable whenever practical.

---

# State

This project intentionally avoids complex application state.

Content is mostly static.

Interactive behavior is isolated inside dedicated script modules.

---

# Assets

Assets are organized by purpose.

```text
assets/

fonts/
icons/
images/
logos/
projects/
```

Production assets should remain optimized before being committed.

---

# Public Directory

The public directory contains deployment assets only.

Examples:

```text
favicon.ico

manifest.webmanifest

robots.txt

sitemap.xml

social-preview.png
```

No application source code belongs here.

---

# Scalability

The architecture should comfortably support future expansion.

Examples:

- 100+ projects
- Certifications
- Awards
- Blog posts
- Multiple case studies
- Additional portfolio sections

Future growth should primarily involve adding data rather than rewriting components.

---

# Performance Philosophy

The project balances:

- Performance
- Readability
- Maintainability

Premature optimization is avoided.

Clean architecture should not unnecessarily sacrifice performance.

---

# Learning Philosophy

This repository also serves as a learning resource.

Comments should explain:

- Why a solution exists
- Architectural decisions
- Non-obvious logic

Comments should avoid explaining obvious syntax.

Example:

Good:

// Cards are generated from data so adding projects never requires editing HTML.

Bad:

// Create a variable named cards.

---

# Repository Standards

The repository should demonstrate professional engineering practices.

This includes:

- Consistent formatting
- Clear file organization
- Meaningful commit history
- Modular architecture
- Comprehensive documentation
- Production-ready code

---

# Non-Negotiable Rules

- No duplicated UI components.
- No duplicated CSS.
- No hardcoded portfolio content inside components.
- No inline styles.
- No JavaScript frameworks.
- No CSS frameworks.
- No unused code.
- No placeholder content in production.
- No console errors or warnings.
- Every reusable UI element should become a reusable component.
- Every feature should be documented.
- All code should prioritize readability over cleverness.

---

# Long-Term Goal

The finished repository should be understandable by another developer without additional explanation.

A new contributor should be able to:

1. Clone the repository.
2. Read the documentation.
3. Understand the architecture.
4. Build the project.
5. Deploy it successfully.

The documentation should be sufficient for both human developers and AI coding assistants to continue development consistently.