# PRD of Watertown RMV Road Test Guide

**Author:** Shiv Motwani
**Client / primary user:** Akshata Kapoor
**Status:** v1 (assignment submission + real use)
**Live site:** https://smotwani1.github.io/watertown-road-test/ 

---

## 1. Overview

A free, mobile-first website that consolidates real, Watertown-specific road-test
information into one trustworthy, calming guide. Today this information does not
exist in one place, it's scattered across Reddit threads, Facebook comments, and
generic nationwide road-test content. This product is the first single source that
tells a Watertown RMV test-taker exactly what to expect.

## 2. Problem

People preparing for the Class D road test at the Watertown RMV (and their parents)
arrive anxious and under-informed. The only available information is generic and
scattered, so test-day fear comes from the unknown rather than from normal nerves.
There is no consolidated, verified, Watertown-specific resource.

## 3. Goals & success criteria (definition of done)

**For the assignment, "done" means:**
- All base requirements met: 3+ pages with consistent navigation, semantic HTML,
  an external stylesheet, layout via CSS Grid/Flexbox, responsive design, a favicon,
  and deployment on GitHub Pages with a live URL.
- Extensions delivered: Google Fonts, CSS animations/transitions, a validated contact
  form, a dark-mode toggle, and Open Graph meta tags.
- `PROPOSAL.md`, `PRD.md`, and the layout sketch are committed to the repo.

**For the client (Akshata), "done" means:**
- She reads the guide before her test and reports feeling **calmer and more prepared**
  walking in, able to find the routes, understand the maneuvers, and confirm her car
  qualifies, without confusion. (Success is measured by her preparedness and calm, not
  by pass/fail, which depends on factors the site cannot control.)

## 4. Target users

- **Primary:** Akshata Kapoor, a learner's-permit holder who passed the MA theory test
  and is preparing for her Class D road test at the Watertown RMV. She experiences test
  anxiety and is a visual learner who studies through flashcards and visual cues (she
  used Zutobi for her permit test). She wants in-depth, "insider" detail and reassurance.
- **Secondary:** Other learner's-permit holders testing at the Watertown RMV soon, and
  the parents of teen drivers. They share the same need: know what the test involves,
  the possible routes, how each maneuver is graded, and the official requirements.

## 5. Scope

**In scope (v1):**
- Five content pages consolidating verified Watertown-specific content (see §6).
- A flashcard self-quiz for active-recall study.
- A contact/feedback form with client-side validation (display-only).
- Dark-mode toggle, responsive layout, favicon, Open Graph tags.

**Out of scope (v1), deferred to future:**
- A working backend for the feedback form (real submission via a service like Formspree).
- Additional RMV sites beyond Watertown.
- Video content.

The bar for v1 is deliberately clear: be the first consolidated, trustworthy,
Watertown-specific guide. The built product already clears that bar; v1 is about
polishing and shipping it, not adding new capability.

## 6. Functional requirements

**Site-wide**
- Consistent sticky header with logo, navigation (Overview, Maneuvers, Routes,
  Flashcards, Feedback), and a dark-mode toggle on every page.
- The current page is indicated in the nav (`aria-current`).
- Shared external stylesheet (`styles.css`) and shared theme script (`theme.js`).
- Every factual claim is tagged with its source: **Official** (verified against RMV
  documents and the MA Driver's Manual) or **Reports** (from recent test-takers).
- Route details are always framed as a preview, never guaranteed, since routes change.

**Overview (`index.html`)**
- Hero with a reassuring promise.
- "At a glance" card: location (550 Arsenal St.), what to bring, sponsor rules,
  the car/parking-brake requirement, under-18 hours, and the fee.
- "Before you pull out" opening sequence; day-of plan; "if you don't pass" guidance.

**Maneuvers (`maneuvers.html`)**
- Prominent "What the examiner is grading" scored checklist (the visual centerpiece).
- The full official 17-item skills checklist.
- Expandable step-by-step blocks for parallel parking, three-point turn, 50-ft reverse,
  and hill parking, each with the most common failure noted.

**Routes (`routes.html`)**
- Both Watertown routes as numbered walkthroughs (Route A hedged as less certain,
  Route B corroborated), with a "drive it yourself first" caveat.
- Speed zones and the right-on-red trap; top reasons people fail.

**Flashcards (`flashcards.html`)**
- A grid of flip cards (tap/click to reveal the answer) covering the key rules and
  scored items, for active-recall study. *(Interview-driven feature: the client is a
  visual learner who studies by active recall.)*
- A "rules people get wrong" reference section (flashing yellow, right on red, stop
  signs, four-way stops), verified against the Driver's Manual.

**Feedback (`contact.html`)**
- An HTML form with validation attributes (`required`, `minlength`, `type="email"`):
  name, optional email, which test site, and a message.
- Client-side validation and an on-screen confirmation. No backend in v1.

**Footer (all pages)**
- Sources/credibility line.
- Contact: `smotwani1@babson.edu` (as a `mailto:` link).
- Dates in "Month Year" format, official info verified June 2026; routes reviewed June 2026.

## 7. Non-functional requirements

- **Responsive:** fully usable on **phone and laptop** screen sizes; phone is the
  primary context (read around test day). Layouts collapse cleanly on narrow screens.
- **Browsers:** current Chrome, Safari, Firefox, and Edge (desktop and mobile).
  Legacy browsers (e.g., Internet Explorer) are out of scope.
- **Accessibility:** target a **Lighthouse Accessibility score of 80+**. Keyboard
  navigable, visible focus states, form inputs labeled, semantic landmarks, and
  `prefers-reduced-motion` respected.
- **Performance:** static site, no build step or backend; fast first load.

## 8. Design & UX

Calm, reassuring, confidence-building, the design's job is to remove uncertainty so
the only nerves left are normal ones.

- **Palette:** warm "paper" background, dark ink text, a single gentle green accent
  (green chosen for its "go / pass" association), plus muted source-badge colors.
- **Type:** Fraunces (characterful serif) for headings; Hanken Grotesk (clean sans)
  for body, both via Google Fonts.
- **Signature element:** dashed "road-lane marking" dividers between sections.
- **Motion:** subtle scroll-reveal, accordion expansion, and a 3D flashcard flip;
  all disabled under reduced-motion.
- **Reference:** Zutobi, for its flashcard-driven visual study approach, keep the
  active-recall format; change it to be Watertown-specific, route-focused, and free.

## 9. Technical approach

- Static multi-page site: hand-written HTML, one shared `styles.css`, one shared
  `theme.js`, an SVG favicon, and an Open Graph image (`og-image.png`).
- Layout via Flexbox (navigation) and CSS Grid ("At a glance" rows, flashcard grid).
- Dark mode via CSS custom properties and a `data-theme` attribute, persisted in
  `localStorage`, with a pre-paint inline script to avoid a flash of the wrong theme.
- Deployed on GitHub Pages from the repository root.

## 10. Content & accuracy policy

- **Official** facts (requirements, rules, the parking-brake rule, fees, maneuvers)
  are verified against the RMV road test materials and the MA Driver's Manual.
- **Reported** details (routes, speed zones, examiner behavior) come from corroborated
  recent test-taker accounts and are labeled as such, never stated as guaranteed.
- AI-generated or assumed facts are never published without source verification.

## 11. Future (v2+)

- Wire the feedback form to a real submission service (e.g., Formspree).
- Expand to additional MA RMV sites using the same template.
- Add visual/video route walkthroughs.
- A "will my car qualify?" interactive checker (driven by real user questions about
  electronic parking brakes).