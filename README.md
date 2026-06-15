# Watertown RMV Road Test Guide

A free, multi-page guide to the Massachusetts road test at the Watertown RMV —
the requirements, the maneuvers, both routes, the rules people get wrong, and a
flashcard self-quiz. Built for an anxious learner driver who studies visually.

**Live site:** https://USERNAME.github.io/watertown-road-test/ *(update after deploy)*

## Pages
- `index.html` — Overview (at a glance, the opening, day-of plan)
- `maneuvers.html` — Scored checklist + step-by-step maneuvers
- `routes.html` — Both Watertown routes, speed zones, top failure reasons
- `flashcards.html` — Flip-card self-quiz + rules reference
- `contact.html` — Feedback form

## Requirements checklist (Base)
- [x] **3+ pages with consistent navigation** — 5 pages, shared header/nav
- [x] **Semantic HTML** — `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`
- [x] **External CSS stylesheet** — `styles.css` (shared by every page)
- [x] **Layout with Grid or Flexbox** — flex nav; grid for "at a glance" and flashcards
- [x] **Responsive** — mobile-first; layouts collapse below 520px
- [x] **Favicon** — `favicon.svg`
- [ ] **Deployed on GitHub Pages** — see steps below

## Extensions included
- [x] CSS animations / transitions — scroll-reveal, accordion, flashcard flip
- [x] Google Fonts — Fraunces (display) + Hanken Grotesk (body)
- [x] Contact form with validation attributes (`required`, `minlength`, `type="email"`)
- [x] Dark mode toggle — persists via `localStorage`, respects system preference
- [x] Open Graph meta tags + `og-image.png`
- Accessibility: semantic landmarks, `aria-current`, labels, visible focus, reduced-motion

## Deploy to GitHub Pages
1. Create a new GitHub repository (e.g. `watertown-road-test`).
2. Upload every file in this folder to the repo root (keep the filenames as-is).
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, pick `main` and `/ (root)`, save.
5. Wait ~1 minute; your live URL appears at the top of that Pages settings screen.
6. Replace the `USERNAME` placeholders in the README and the `og:url` meta tags with your real URL.

## Notes
- The feedback form is front-end only on a static host. To actually receive
  submissions, point the form's `action` at a service like Formspree.
- Official items are verified against the RMV road test materials and the MA
  Driver's Manual. Route details are reported by recent test-takers and may change.
