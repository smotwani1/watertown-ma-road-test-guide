# Watertown RMV Road Test Guide

A free, mobile-first guide to passing the Class D road test at the Watertown RMV in
Massachusetts, the routes, the maneuvers, what examiners actually grade, the car
requirements, and the rules people get wrong, plus a flashcard self-quiz.

## Who this is for

My client is **Akshata**, my girlfriend. She recently passed her Massachusetts permit
test and is preparing for her road test at the Watertown RMV. She gets anxious before
tests and learns best through flashcards and visual cues, so I built this for her, and
for anyone else testing at Watertown who's tired of piecing together scattered, generic
advice from Reddit threads and Facebook comments.

## What the site does

It consolidates real, Watertown-specific road-test information into one trustworthy place
so test-day nerves come from normal anxiety, not the unknown. It includes:

- **Overview** - requirements at a glance, the opening sequence, and a day-of plan
- **Maneuvers** - what the examiner grades, with step-by-step maneuver instructions
- **Routes** - both Watertown test routes, speed zones, and the top reasons people fail
- **Flashcards** - a flip-card self-quiz for active-recall study
- **Feedback** - a form for recent test-takers to send corrections

Every fact is labeled as either **Official** (verified against the RMV documents and the
MA Driver's Manual) or **Reported** (from recent test-takers), so readers know what to
trust. The design is calm and reassuring on purpose - warm paper background, soft serif
headings, a green accent, and a dark-mode toggle.

## Live site

https://smotwani1.github.io/watertown-road-test/

## What I learned

- **Interview your client before you assume.** I built an early version thinking she
  needed thorough written explanations. The interview revealed she's a visual learner who
  studies by active recall, so I added the flashcard quiz and visual cues. The *way* she
  learns mattered as much as the content.
- **AI generates confident, wrong facts.** When I used AI design tools, they invented a
  fake address and missed real requirements. I kept only verified content, which is the
  whole point of the product: being trustworthy where the internet is scattered and wrong.
- **Real CSS I now understand:** Flexbox and CSS Grid for layout, custom properties
  (`--variables`) to power light/dark themes, `@media` queries for responsiveness,
  `position: sticky`, and `transform: rotateY()` for the flashcard flip.
- **Shipping is the hard part.** Researching and building was satisfying; getting it in
  front of a real user and acting on feedback is where the real work is.