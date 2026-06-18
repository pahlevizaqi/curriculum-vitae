# CV Website — Pahlevy Zaqi Shah

A modern, responsive Curriculum Vitae website for **Pahlevy Zaqi Shah**, an IT Enthusiast with interests in Networking, DevOps, Cloud Computing, and Software Development.

## Tech Stack

- **HTML5** — semantic markup, single-page layout
- **CSS3** — custom properties, CSS Grid, Flexbox, Intersection Observer animations
- **Vanilla JavaScript** — scroll reveal, skill bar animations, mobile nav, form handling
- **Font Awesome 6** — icons throughout
- **Google Fonts** — Outfit (headings) + JetBrains Mono (code/mono elements)

## Features

- Dark professional theme (deep navy + cyan accents)
- Fully responsive: desktop, tablet, smartphone
- Animated scroll reveals (Intersection Observer API)
- Animated skill progress bars
- Vertical education timeline
- Sticky navbar with active-link tracking
- Contact form with loading state
- Download CV button (ready to wire up a PDF)
- Parallax hero glow on mouse move

## Project Structure

```
index.html   — Main page markup
style.css    — All styles (CSS variables, layout, animations)
script.js    — Behaviour (scroll reveal, skill bars, nav, form)
```

## Running Locally

Open `index.html` directly in a browser — no build step required.

To serve with live-reload:
```bash
npx serve .
# or
python3 -m http.server 8000
```

## Customising

- **Education institutions** — search for `[Nama Sekolah` in `index.html` and replace placeholders
- **PDF download** — place `cv-pahlevy-zaqi-shah.pdf` in the root and set `data-pdf="/cv-pahlevy-zaqi-shah.pdf"` on the download button
- **Skill levels** — edit `data-level="XX"` (0–100) on each `.skill-item`
- **Colors** — all in `:root` CSS variables at the top of `style.css`
