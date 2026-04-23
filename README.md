# Lyan's Personal Portfolio

A personal portfolio website built across three progressive weekly sprints, applying HTML5, CSS3, and vanilla JavaScript. The site features a **cyberpunk / glitch aesthetic** with neon colors, glitch text animations, infinite scroll carousels, an image modal, and interactive audio effects on the pets page.

-------------------------------------------------------------------------------------

## Table of Contents

- [Live Demo](#live-demo)
- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies](#technologies)
- [Pages](#pages)
  - [index.html — Portfolio](#indexhtml--portfolio)
  - [pets.html — My Pets](#petshtml--my-pets)
- [JavaScript Behavior](#javascript-behavior)
- [Responsive Design](#responsive-design)
- [License](#license)

------------------------------------------------------------------------------------

## Live Demo

> Open `index.html` directly in your browser. No build step or server required for local use.  
> *(Note: audio autoplay on the pets page requires a user gesture first, which is standard browser behavior.)*

----------------------------------------------------------------------------------

## Project Structure

```
portfolio/
├── index.html                  # Main portfolio page
├── views/
│   └── pets.html               # Pets secondary page
├── src/
│   └── css/
│       ├── styles.css          # Styles for index.html
│       └── pets.css            # Styles for pets.html
├── web.js/
│   ├── index.js                # JS for index.html
│   └── pets.js                 # JS for pets.html
├── public/
│   ├── images/
│   │   ├── index/              # Portfolio images (profile, projects, awards)
│   │   └── pets/               # Pet images (6 webp files)
│   └── audio/                  # Pet sound clips (6 mp3 files)
├── LICENSE
└── README.md
```

----------------------------------------------------------------------------------

## Features

- **Glitch / Cyberpunk aesthetic** — animated glitch effects on H1 (`.glitch`), H2/H3 (`[data-glitch]`), and the pets page neon title.
- **Typewriter animation** — the portfolio title types itself character by character on load.
- **Scroll reveal** — elements fade in as the user scrolls down.
- **Infinite auto-scroll carousels** — projects scroll right-to-left; evidences scroll left-to-right. Both pause on hover.
- **Expandable image modal** — clicking any evidence image opens a fullscreen overlay. Closes via button, outside click, or `Escape`.
- **Spark particles on input** — typing in the contact form emits colored particles for visual flair.
- **Pet audio on hover** — hovering over a pet image plays its looping sound clip; moving away stops it.
- **Social media links** — direct links to Instagram and LinkedIn profiles.
- **Contact form** — basic HTML form with name, email, and phone fields.

--------------------------------------------------------------------------

## Technologies

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Markup     | HTML5 (semantic tags, ARIA attributes)  |
| Styling    | CSS3 — Flexbox, CSS Grid, Animations, `@keyframes`, `clip-path` |
| Scripting  | Vanilla JavaScript (ES6+)               |
| Assets     | WebP images, MP3 audio, PNG icons       |
| Version Control | Git                                |

-----------------------------------------------------------------------------

## Pages

### `index.html` — Portfolio

| Section      | Description |
|--------------|-------------|
| **Header/Nav** | Fixed navigation with smooth-scroll anchor links (`#about`, `#experience`, `#contact`) and a link to the pets page. Built with CSS Flexbox. |
| **Hero**     | Full-name glitch H1 with typewriter effect, profile photo with permanent animated glitch shadow. |
| **About me** | Short bio paragraph anchored at `#about`. |
| **Why me?**  | Value proposition paragraph. |
| **Projects** | Infinite auto-scrolling carousel of four achievement cards (Cesim Elite 2025, Companygame 2024, Cesim Elite 2024, Award). |
| **Evidences**| Reverse-direction infinite carousel of image cards, each expandable in a modal lightbox. |
| **Skills**   | Technical and soft skills lists, personal story, social media links. |
| **Contact**  | HTML form with name, email, and phone inputs and a submit button. |
| **Footer**   | Copyright notice. |

### `pets.html` — My Pets

A secondary page showcasing six fictional pet companions in a responsive CSS Grid layout.

| Pet      | Origin |
|----------|--------|
| Phoenix  | Mythology |
| Pikachu  | Pokémon |
| Kirara   | Inuyasha |
| Luna     | Sailor Moon |
| Kirby    | Nintendo |
| Kuriboh  | Yu-Gi-Oh! |

Each card includes an image, a glitch-styled name, and a description. Hovering plays the pet's sound clip via the Web Audio API.

------------------------------------------------------------------

## JavaScript Behavior

### `web.js/index.js`

| Function | Trigger | Effect |
|---|---|---|
| `typeWriter()` | `window load` | Types the H1 text character by character |
| `revealOnScroll()` | `window scroll` | Adds `.active` to `.reveal` elements when they enter the viewport |
| Image modal | Click on `.expandable-image` | Opens fullscreen modal with the clicked image |
| Modal close | Click `×`, outside area, or `Escape` | Closes the modal and restores scroll |
| Spark particles | `keydown` on any `input` | Creates and animates colored particle `<span>` elements |

### `web.js/pets.js`

| Function | Trigger | Effect |
|---|---|---|
| Audio playback | `mouseenter` on pet image | Plays the pet's looping MP3 at 50% volume |
| Audio stop | `mouseleave` on pet image | Pauses and resets the audio to the beginning |

--------------------------------------------------------------------------

## Responsive Design

Responsive breakpoints are currently implemented **only in `pets.css`**:

| Breakpoint | Columns |
|---|---|
| ≥ 993px (desktop) | 6 columns |
| ≤ 992px (laptop) | 3 columns |
| ≤ 768px (tablet) | 2 columns |
| ≤ 600px (mobile) | 1 column |

All images use `max-width: 100%; height: auto` for fluid scaling.

## License

This project is licensed under the terms included in the `LICENSE` file.

*Built by [Lyan Víctor Páez Arévalo]
