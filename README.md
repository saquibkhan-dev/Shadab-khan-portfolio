# Shadab Ali Khan — Portfolio (React)

A premium, finance-institutional personal portfolio built with React + Vite, using a
"general ledger" design language (ledger rows instead of generic cards, Space Grotesk /
Instrument Serif / Inter typography, a muted charcoal-and-ledger-green palette).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
index.html              Vite entry HTML (fonts, meta tags)
src/
  main.jsx              React root
  App.jsx                Page assembly / theme state
  index.css              Full design system (ledger theme, dark mode, responsive rules)
  data.js                All resume-derived content — edit this to update copy
  hooks/
    useReveal.js         Scroll-triggered fade-in
    useCountUp.js        Animated KPI counters
  components/
    Header.jsx           Sticky nav, dark-mode toggle, mobile menu
    Hero.jsx             Name, headshot, role summary, KPI strip
    About.jsx            Profile summary
    Experience.jsx       Expandable career history (ledger rows)
    Expertise.jsx        Skills matrix with animated proficiency bars
    Approach.jsx         How-the-work-gets-done cards
    Dashboard.jsx        Career-data panel + tenure chart
    Credentials.jsx      Education table + award "stamps"
    Contact.jsx          Contact links + validated form (client-side only)
    Footer.jsx
    Chrome.jsx           Scroll progress bar, back-to-top button, cursor beam
public/
  profile-photo.png       Headshot used in the hero section
```

## Notes

- All KPI numbers in the Hero and Career Data sections are derived directly from the
  resume's employment dates and named systems — no performance metrics have been invented.
- The contact form validates client-side and includes a honeypot field for basic spam
  resistance, but it isn't wired to a backend yet. To make it functional, point the
  `handleSubmit` function in `src/components/Contact.jsx` at a form service (e.g.
  Formspree, a serverless function, or your own API) or an `mailto:` fallback.
- Dark mode follows the system preference by default and can be toggled manually via the
  header button; the choice is only kept in memory (not persisted) — add `localStorage`
  in `App.jsx` if you'd like it to stick between visits.
- To swap the headshot, replace `public/profile-photo.png` (any same-named file works,
  or update the `src` path in `Hero.jsx`).
