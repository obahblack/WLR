# About page variations — White Label Resell

Three revised About page variations. The revision refocused every page around
**who the company is, the people behind it, its values, journey and culture** —
moving away from project-delivery language, statistics and case-study
directories. Each page is a self-contained single file that opens directly in a
browser (double-click it) with no server required.

```
about-variations/
├── shared-data.js   verified content (plain JS, loaded via <script src>)
├── design.css       shared design system (home.html palette, type, grids)
├── shared.jsx       shared components source (nav, footer, team cards, video,
│                    marquee, FAQ, CTA, illustrations) — inlined at build
├── build.js         assembles the three HTML pages from the sources
├── pages/           per-variation composition sources (about-v1/v2/v3.jsx)
├── about-v1.html    People and Principles  (self-contained)
├── about-v2.html    Story and Culture      (self-contained)
├── about-v3.html    The Collective         (self-contained)
└── README.md        this file
```

How it stays self-contained: React components (JSX) are inlined into each page
in a single `<script type="text/babel">` block, `design.css` is linked, and
`shared-data.js` is loaded with a plain `<script src>` (plain JS — not Babel —
so browsers load it even from `file://`). To regenerate after editing the
sources: `node build.js`.

**Open any page by double-clicking it.** Optionally serve the whole project:

```
python3 -m http.server 8000
# visit http://localhost:8000/about-variations/about-v1.html
```

---

## 1. The three variations

All three pages share the same revision rules:
- **Short headings** — every hero heading and large centred section heading is a
  maximum of two lines on desktop (font sizes unchanged; copy shortened).
- **Alternating black/white sections** — black for high-impact content, white
  for relief, with no more than two or three black sections consecutively
  (the principle described for `reform.hc`, which is not present in the project).
- **The film sits inside the team area** — the team preview, its "View Full
  Team" action, then the video all share one extended black background, before
  the page transitions into the next white section.
- **Logo-only central brand marks** — the mark is the three-bar logo only (no
  wordmark, tagline, description or decorative text underneath it).

### about-v1.html — People and Principles
Black hero → **white** "What we do" section (four service blocks around the
large three-bar logo) → **white** journey → black team preview + film → **white**
department bento → black partner marquee → light FAQ → CTA.

The "What we do" section uses a three-part desktop composition —
`left cards | 44px gap | large logo | 44px gap | right cards`. The centre is the
**three-bar logo only** (no wordmark), drawn in black at
`clamp(300px, 24vw, 340px)` tall (340px on a 1440 viewport) via the
`.brand-mark` rule, with side cards at `minmax(280px,1fr)` and a restrained
fade+scale entrance. The four blocks are the company's core services — Design
and Development, SEO, Marketing, Content Strategy and Analytics Tracking —
arranged in the checkerboard inverse pattern used across the page: **top-left
white, bottom-left black, top-right black, bottom-right white** (white boxes get
a hairline black border). On tablet the logo moves above a 2×2 card grid; on
mobile the logo sits first with one card per row.

### about-v2.html — Story and Culture
Black hero → **white** who-we-are → black core values → **white** journey →
black team preview + film → **white** culture statement → **white** department
cards → CTA. No marquee, no FAQ — deliberately the most "story" treatment. The
film is present here too, as a continuation of the people story.

### about-v3.html — The Collective
Black hero → **white** who/what we believe → black disciplines ring → black
partner marquee → **white** values → **white** journey → black team preview +
film → light FAQ → CTA. The strongest black/white alternation of the three.

### Differentiation
Navbar, footer, typography, palette, buttons and motion are shared. Each page
uses a different hero composition (centred / split-editorial / centred), a
different team-card design (checkerboard / editorial portrait / identity
overlay) and a different department layout (bento / cards / ring).

---

## 2. Shared verified content (`shared-data.js`)

- **Team — 8 people**, the first eight in the current live team order at
  `https://whitelabelresell.com/team/` (verified 2026-08-07):
  Christian Clark (Founder), Himanshu Raikwar (Lead Digital Designer),
  Mohammad Muneeb (Lead SEO Specialist), Anil Raikwar (Analytics Engineer),
  Haider Ali (SEO Specialist), Brandon Carroll (Acquisition Specialist),
  Taofeek Abdulrauf (Cloud Engineer), Munir Nadayako (Web Developer).
  Each has the **correct real photograph** (local copies in
  `../assets/images/team/`), the verified role, and the **verified LinkedIn
  URL** where one exists on the live page. Brandon Carroll and Munir Nadayako
  have no LinkedIn on the live page (links render as `#`) — their cards show
  no LinkedIn icon rather than inventing a URL.
- **8 departments** — mapped from the live roles and `home.html` services.
- **6 core values** — each variation presents a different selection/treatment.
- **Journey — 3 stages** (specialist bench → growing bench → connected team),
  using stages rather than invented dates.
- **Clients — 3 verified** marks for the marquee: Guild Golf Carts,
  Unemployment Society, Flat Bid Moving (from `case-studies.html`).
- **FAQ — 4 company-focused** questions; answers supported by existing site copy.
- No invented statistics, no project counts, no delivery-velocity numbers.

---

## 3. What was reused from where

- **`home.html` (design system):** navbar (HUD), footer, Geist + Geist Mono,
  the `#000/#FFF` palette, button system, section borders/padding, the
  `useReveal` fade-and-rise motion, marquee keyframes, reduced-motion handling.
- **Home Version 1 (`home-variation-1.html`), selected components only:**
  the video section treatment (grain, brand mark poster, "PLAY VIDEO" bracket
  cursor, click-to-play Vimeo embed, close control, "2 Minutes Watch" label)
  and the infinite partner marquee treatment. The illustrated black phase-card
  style (monochrome line-art on dark cards) inspired the quad commitment blocks
  and illustrated value cards. **No other Home Version 1 material was reused.**

---

## 4. Open items for approval

- **Partner logos** — no client logo image files exist in the project, so the
  marquee renders the three verified client names as monochrome typographic
  wordmarks (labelled "verified client marks"). Real brand marks should be
  approved and dropped in before publishing.
- **Video asset** — the pages reuse the company's existing Vimeo film already
  used in Home Version 1; a team-culture-specific cut can replace it in
  `shared-data.js` (`window.ABOUT.video.url`). The film is currently a
  "poster + play" control (accessible `<button aria-label>`), not an
  autoplaying background video.
- **Nav target** — the shared HUD points "About" at `about-v1.html`. To promote
  a different variation, change the About href in `shared.jsx` and rebuild.

---

## 5. Recommended version

**about-v1.html is recommended** as the primary About page: it balances the
centred brand-led hero, the central-logo commitments section, the human team
preview and a complete arc through values, journey, departments, marquee, FAQ
and CTA — closest in rhythm to `home.html` and the most "face of the company"
of the three. Keep v2 as the story-led option and v3 as the structured,
relationship-between-people-and-disciplines option.

---

## Technical notes

- Same stack as the rest of the project: static HTML + React 18 UMD + Babel
  standalone from unpkg (pinned, with SRI). No build step needed to view.
- Pages render when opened directly via `file://`. Babel's external-script
  fetching is blocked from `file://`, so all JSX is inlined and the shared data
  is loaded as plain JS.
- Team grids are 4 columns on desktop (two rows of four), 2 on tablet, 1 on
  mobile. `object-fit: cover`, grayscale portraits, explicit dimensions, lazy
  loading below the fold, verified `width`/`height` from the source images.
- The journey is a short three-stage section on every page (no long timelines).
- The v1 central-logo section collapses to a logo-on-top 2×2 card grid on
  tablet and a single-column stack on mobile; the logo never exceeds the
  viewport and nothing overflows horizontally.
- `prefers-reduced-motion` disables transitions (including the logo and
  video-frame reveals), the marquee animation (which becomes a static wrapped
  grid) and reveals.
- Accessible: semantic heading order, visible `:focus-visible` outlines,
  `aria-expanded` on FAQ buttons, descriptive alt text on portraits, a
  keyboard-focusable play control on the film, no hover-dependent information.
