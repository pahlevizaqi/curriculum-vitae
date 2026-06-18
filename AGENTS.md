# AGENTS.md — CV Website Architecture

## Overview

Pure static site: three files, no framework, no build pipeline. Designed to be deployed directly to Netlify as static hosting.

## File Map

| File | Role |
|---|---|
| `index.html` | Single HTML document, all sections inline |
| `style.css` | All styling — design tokens, layout, components, responsive |
| `script.js` | All JS behaviour in one IIFE |

## Key Design Decisions

### Single-page scrolling
All sections live in one HTML file with `id` anchors. The navbar uses `href="#section-id"` links and JavaScript tracks scroll position to update the active nav item.

### Intersection Observer for animations
Both scroll-reveal (`.reveal` class) and skill-bar animation use `IntersectionObserver` rather than scroll event listeners — better performance, fires once per element.

### CSS Custom Properties
All design tokens (colors, fonts, radius, transition) are defined in `:root` at the top of `style.css`. Change a value there and it cascades everywhere.

### Skill bars
Each `.skill-item` has `data-level="XX"`. JavaScript reads this value and sets `.skill-fill { width: XX% }` when the element enters the viewport. The CSS transition handles the animation.

### Education timeline placeholders
All institution names and dates are wrapped in `[Square brackets]` so they are easy to find and replace. The timeline uses CSS positioning around a vertical `::before` pseudo-element line.

## Coding Conventions

- No external JS dependencies — pure vanilla
- All JS wrapped in an IIFE (`(function(){ 'use strict'; ... })()`)
- CSS uses BEM-like class naming (`block`, `block-element`, `block--modifier`)
- Mobile-first breakpoints: 1024px → 900px → 768px → 480px
- `z-index` layers: navbar=1000, overlays=above, content=1

## Extension Points

- **Backend contact form**: replace the `setTimeout` mock in `contactForm` handler with a `fetch()` to a Netlify Function or third-party service
- **PDF CV**: add `data-pdf="/cv.pdf"` attribute to `#downloadBtn` — the click handler already checks for it
- **Dark/light toggle**: all colors in CSS variables, adding a `[data-theme="light"]` override on `body` would be trivial
- **More sections**: add a `<section class="section" id="projects">` block in HTML and a matching nav item; the reveal and active-link systems pick it up automatically
