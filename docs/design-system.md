# Design System

## Objective

The UI must follow a minimal, subtle-personality design direction inspired by restrained expressive systems.

The design must remain consistent across all pages and components without visual drift or ad-hoc styling.

---

# Visual Direction

## Style

Minimal base with subtle personality influence (Balatro-inspired restraint).

Core principles:
- minimal structure first
- controlled expressiveness
- no decorative UI without function
- consistency over variation

---

# Background System

## Base

Pure dark foundation.

- Primary background: #0b0b0f
- Surfaces: near-black tonal steps only (2–4 levels max separation)
- No gradients in base layer

---

# Color System

## Primary Accent

#67bed9

## Secondary Accent

#ebac77

## Usage Rules

- Primary: links, active states, focus, key UI actions
- Secondary: highlights, tags, secondary emphasis, decorative accents
- No gradient blending between accents
- Limited simultaneous accent usage per screen

---

# Typography System

## Structure

Dual font system:

- Headings: geometric sans (structured, modern, technical)
- Body: neutral sans (readability-first, low personality noise)
- Code: monospace, minimal styling

## Rules

- strict hierarchy scaling
- no decorative typography
- consistent spacing system across headings
- tight H1 tracking
- clean paragraph rhythm

---

# Radius System

Soft radius model:

- Small: 10px
- Medium: 14px
- Large: 18px

## Rules

- no sharp corners
- consistent rounding across components
- containers default to medium-large radius

---

# Shadow System

Soft elevation only:

- Base: no shadow
- Cards: subtle blur shadow, low opacity
- Hover: slight elevation increase only
- No directional or harsh shadows

---

# Motion System

Subtle motion only:

- Duration: 120–180ms
- Easing: smooth ease-out curve
- Hover: slight scale/translate (max 2–3%)
- Transitions: fade-first behavior
- No elastic, bounce, or exaggerated movement

---

# Layout System

## Density

Spacious-balanced hybrid.

Rules:
- generous vertical spacing
- grouped content blocks
- avoid dense grids unless necessary
- prioritize readability over compression

---

# UI Components

## Cards

Primary structural element.

- define all grouping logic
- soft elevation only
- consistent padding system

## Buttons

- minimal design
- primary / secondary only
- no excessive variants

## Inputs

- flat styling
- minimal borders
- clear focus state using primary accent

## Dividers

- subtle or absent
- used sparingly

---

# Interaction States

## Focus

- primary accent glow (low intensity)
- must be visible but not dominant

## Hover

- slight scale or elevation change only
- no color flashing or abrupt transitions

## Active

- subtle contrast shift
- consistent across all components

---

# Accessibility Alignment

The system must support:

- semantic HTML structure
- keyboard navigation
- visible focus states
- WCAG AA color contrast compliance
- reduced motion preference support
- non-reliance on color alone for state changes

---

# Consistency Rules

- no one-off component styling
- no page-specific visual systems
- all styles must derive from system tokens
- no ad-hoc spacing or color values outside defined tokens

---

# Maintenance Philosophy

The design system must remain:

- stable over time
- extendable without refactor
- consistent across new features
- resistant to visual fragmentation

All additions must conform to existing tokens and rules without exception