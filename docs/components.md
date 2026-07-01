# Components

This document defines the component architecture for the WONxLABS Website.

The website follows a modular, single-responsibility architecture. Every UI element belongs to exactly one component. Components should be small, reusable, and maintainable.

---

# Component Principles

Every component should:

- Have a single responsibility.
- Be reusable whenever practical.
- Avoid hardcoded repeated data.
- Receive data through parameters whenever possible.
- Avoid directly manipulating unrelated DOM elements.
- Keep business logic outside the UI.
- Remain independent from other components whenever possible.

If a component becomes difficult to understand or exceeds roughly 150 lines, consider splitting it into smaller components.

---

# Naming Convention

Component files use PascalCase.

Examples:

```
Hero.js
ProjectCard.js
SectionHeader.js
TimelineItem.js
```

CSS classes use kebab-case.

Examples:

```
project-card
section-header
hero-content
timeline-item
```

JavaScript variables and functions use camelCase.

Examples:

```
projectData
renderProjects()
initializeAnimations()
```

---

# Component Hierarchy

```
App
│
├── Navbar
│
├── Hero
│
├── About
│
├── Projects
│   ├── SectionHeader
│   └── ProjectCard
│
├── Skills
│   ├── SectionHeader
│   └── SkillChip
│
├── Timeline
│   ├── SectionHeader
│   └── TimelineItem
│
├── Contact
│   ├── SectionHeader
│   └── SocialLink
│
├── Footer
│
├── ScrollProgress
│
└── BackToTop
```

---

# Core Components

## App

Responsibilities

- Render the complete application.
- Compose all sections.
- Initialize application layout.

Never contains business logic.

---

## Navbar

Responsibilities

- Navigation links
- Active section indicator
- Mobile navigation
- Logo

---

## Hero

Responsibilities

- Introduction
- Call-to-action buttons
- Personal branding
- Primary visual

---

## About

Responsibilities

- Biography
- Personal summary
- Quick facts

---

## Projects

Responsibilities

- Render project list
- Render project cards
- Organize featured projects

Projects never contain project data directly.

---

## ProjectCard

Responsibilities

- Display a single project
- Technologies
- Status
- GitHub link
- Live demo link

Receives all information through parameters.

---

## Skills

Responsibilities

- Display categorized skills
- Display skill chips

---

## SkillChip

Responsibilities

Display one technology.

---

## Timeline

Responsibilities

- Education
- Experience
- Milestones

---

## TimelineItem

Responsibilities

Display one timeline entry.

---

## Contact

Responsibilities

- Contact information
- Social links
- Email
- Resume

---

## SocialLink

Responsibilities

Render one social link.

---

## Footer

Responsibilities

- Copyright
- Attribution
- Version
- Quick navigation

---

## SectionHeader

Reusable section heading.

Responsibilities

- Eyebrow
- Title
- Description

Used by every major section except Hero.

---

## ScrollProgress

Displays reading progress.

Independent from page content.

---

## BackToTop

Appears after scrolling.

Smoothly returns to the top of the page.

---

# Reusable UI Components

The following components should remain generic enough to be reused throughout the website.

- Badge
- Button
- Card
- Chip
- Divider
- IconLink
- ProjectCard
- SectionHeader
- SkillChip
- SocialLink
- TimelineItem

---

# Data Ownership

Components never own content.

Application content belongs inside:

```
src/data/
```

Examples:

```
navigation.js
projects.js
skills.js
timeline.js
socials.js
site.js
```

---

# Styling

Component-specific styles belong inside:

```
components.css
```

Shared visual patterns should become reusable utility classes instead of duplicated CSS.

Examples:

```
surface
surface-interactive
container
section
glass
button
badge
chip
```

---

# Animation

Animations should remain subtle.

Prefer:

- opacity
- translateY
- scale
- shadow
- border color

Avoid:

- excessive rotation
- exaggerated 3D effects
- distracting motion

JavaScript animations belong inside:

```
src/scripts/
```

CSS transitions belong inside:

```
animations.css
```

---

# Future Components

If future features require them, create dedicated reusable components instead of expanding existing ones.

Examples:

```
CertificateCard
ExperienceCard
GalleryCard
ImageModal
CommandPalette
ThemeSwitcher
Toast
LoadingSpinner
```

---

# Definition of Done

A component is considered complete when it:

- Has one clear responsibility.
- Is reusable.
- Contains no duplicated logic.
- Uses semantic HTML.
- Is responsive.
- Meets accessibility guidelines.
- Has consistent styling.
- Requires no further structural changes after release.

Version 1.0 should require only content updates, not architectural changes.