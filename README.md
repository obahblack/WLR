# White Label Resell — website

Five static pages. No build step, no bundler, no server-side code.

## Files

| File | Page |
|---|---|
| `home.html` | Home |
| `case-studies.html` | Work / case studies |
| `about.html` | About |
| `team.html` | Team (default — off-white tile cards, 4 per row, 4-card CTA) |
| `team-v1.html` | Team variation 1 — Borderless editorial cards, text CTA |
| `team-v2.html` | Team variation 2 — Flat black cards (no frame), wireframe-monitor CTA |
| `team-v3.html` | Team variation 3 — Borderless cards, 4:5 photo, icon leads text, terminal-window CTA |
| `team-v4.html` | Team variation 4 — Spotlight cards (name over photo), role + text LinkedIn on one row, split CTA |
| `team-v5.html` | Team variation 5 — Vertical white cards, role + icon on one row, monitor-frame CTA |
| `v7-shared.jsx` | Shared nav, footer, logo mark, scroll hooks (other pages) |

**All team pages are self-contained.** They use plain JavaScript with `React.createElement` (no JSX, no Babel) so they render even when opened directly from the filesystem via `file://`. The verified team dataset is inlined into each page; they do not depend on `v7-shared.jsx` or `team-data.jsx`.

## Running locally

Open `home.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000/home.html`.

## Deploying

Upload every file in this folder to any static host — Netlify, Vercel, Cloudflare Pages, S3, or plain shared hosting. Keep them in the same directory so relative links and `v7-shared.jsx` resolve.

To make Home the site root, rename `home.html` to `index.html` and update the five nav/footer links that point at `home.html` (they appear in `v7-shared.jsx` and in each page's footer).

## Dependencies

React, ReactDOM, and Babel load from unpkg CDN with pinned versions and SRI hashes. Geist and Geist Mono load from Google Fonts. An internet connection is required on first load; nothing else is needed.

For a fully offline single file, the pages can be inlined individually — ask and one can be produced per page.

## Design system

- Palette: `#000000` and `#FFFFFF` only. No greys, no accent colours.
- Type: Geist (display) and Geist Mono (labels, data, UI chrome).
- Motif: the three-bar mark, used as logo, list bullet, section accent, and as the structural basis for charts and wipes.
- Motion: all scroll-linked. The Sell/Deliver section writes directly to the DOM via refs so the wipe tracks the scrollbar exactly.
- Reduced motion is respected via `prefers-reduced-motion`.

## Content

Copy, statistics, team roster, and the Guild Golf Carts / Unemployment Society / Flat Bid Moving case studies come from material supplied by White Label Resell. The contact form composes a `mailto:` to `partners@whitelabelresell.com`; swap in a form endpoint (Formspree, Basin, or your own handler) before launch if you want submissions captured server-side.

## Team data — verified dataset

All team pages (`team.html`, `team-v1.html` through `team-v5.html`) use a single verified dataset, inlined into each page and sourced from the live Team page at `https://whitelabelresell.com/team/`.

### Verified members (13)

| # | Name | Role | LinkedIn | Remote image |
|---|------|------|----------|-------------|
| 1 | Christian Clark | Founder | [Profile](https://www.linkedin.com/in/christian-clark-9a352b179/) | `1697726084291.jpeg` |
| 2 | Himanshu Raikwar | Lead Digital Designer | [Profile](https://www.linkedin.com/in/himanshuraikwar/) | `Himanshu-Raikwar-1024x1024.png` |
| 3 | Mohammad Muneeb | Lead SEO Specialist | [Profile](https://www.linkedin.com/in/mohammad-muneeb-204418215/) | `Mohammad-Muneeb-1024x1024.png` |
| 4 | Anil Raikwar | Analytics Engineer | [Profile](https://www.linkedin.com/in/anil-raikwar/) | `Anil-Raikwar.png` |
| 5 | Haider Ali | SEO Specialist | [Profile](https://www.linkedin.com/in/haider-naeem-888378249/) | `Haider-Ali-...png` |
| 6 | Brandon Carroll | Acquisition Specialist | None | `Brandon-Carroll-...png` |
| 7 | Taofeek Abdulrauf | Cloud Engineer | [Profile](https://www.linkedin.com/in/taofeek-abdulrauf-a95815226/) | `Taofeek-Abdulrauf-1024x1024.png` |
| 8 | Munir Nadayako | Web Developer | None | `Munir-Nadayako-1024x1022.png` |
| 9 | Mcjethro Kalu | Frontend Developer | [Profile](https://www.linkedin.com/in/mcjethro-kalu-96270a237/) | `Mcjethro-Kalu-1.png` |
| 10 | Asad Ehsan | Administrator | None | `Asad-Ehsan-1021x1024.png` |
| 11 | Zubair Tayyib | Jr UI/UX Designer | None | `Zubair-Muhammad-Tayyib.png` |
| 12 | Sochima Chukwu | Jr Web Developer | [Profile](https://www.linkedin.com/in/sochukwuma-chukwu/) | `Sochi-1024x1016.png` |
| 13 | Nathaniel Duku | Jr Client Success Manager | None | `Nathaniel-Abiodun-Duku-1019x1024.png` |

### Members without verified LinkedIn (5)

Brandon Carroll, Munir Nadayako, Asad Ehsan, Zubair Tayyib, and Nathaniel Duku have no verified LinkedIn profile on the live page. The live page shows placeholder `#` links or no link at all for these members. Every variation still renders the same white/black LinkedIn mark at full opacity for these entries (matching the members who do have profiles), either as a non-clickable span — so the layout stays consistent without a broken link — or, in `team-v4`, as a non-clickable "View LinkedIn →" text button in the same style.

### Discrepancy: old team.html vs. live page

The previous `team.html` listed **20 names**. The live page at `https://whitelabelresell.com/team/` shows **13 members**. The following 7 people appeared in the old file but are **not present** on the live page:

- Noel Uba (Lead Frontend Developer)
- Tobit Odili (Lead Web Developer)
- Sucheta Karmakar (Client Success Manager)
- Prashanth Kumar (UI/UX Designer)
- Hemant Patil (Web Developer)
- Sushant Rajput (Analytics Engineer)
- Mohammad Sami (ML Engineer)

These 7 names have been excluded from all team page variations. If they should be reinstated, their image-to-person mapping must first be verified against the live site.

### Structure and layout

Every page follows the same five-part structure — **navbar (HUD) → hero → profile cards → CTA → footer** — with these shared rules:

- **Hero** is black with **left-aligned text and the animated brand mark on the right** — three tall bars grow upward on load (no dotted/dashed lines; the mark is just the three bars). Hovering the hero inverts it to white (text, bars and button flip), a section-inversion micro-animation shared with the home page.
- **Profile cards** sit on a **white background on every page**, arranged **4 per row with a 24px gap** (2 per row ≤1024px, 1 per row ≤640px). Each card shows photo, name, role and LinkedIn. Cards are **designed differently per variation** — no two versions share a card design, though the underlying structure (image on top, text below) stays the same.
- **LinkedIn**: either a **white/black icon only** (never greyed, full opacity) that links out for the 8 verified members and renders as a matching non-clickable span for the 5 without — or, in `team-v4`, a "View LinkedIn →" text button.
- **No team-size content anywhere**: pages never mention how many people/specialists are on the team.
- The only button on every page is **"Get a quote →"**, with the three-bar logo before the text — white on black sections, black on white sections. No other CTAs exist.
- **The CTA section is black on every page** (the hero is black, the cards sit on white, the CTA returns to black, then the footer) — no page closes with a white CTA.
- **Footer** includes a Blogs link alongside Home, Work, About, Team, Get a Quote and the email.

### Card designs per variation

| Page | Card design |
|---|---|
| `team.html` | Off-white (`#F6F6F6`) tiles with 1px black border, index on photo, icon-only LinkedIn, hover lift |
| `team-v1.html` | Borderless editorial — no container, 4:5 photo, index tag, icon-only LinkedIn |
| `team-v2.html` | Flat black cards — no border, no internal lines, name + icon on opposite ends of one row, role below |
| `team-v3.html` | Borderless — no container, 4:5 photo, icon leads the text block beside the role, name below |
| `team-v4.html` | White cards with the name overlaid on the photo, role + "View LinkedIn →" text button on one bottom row |
| `team-v5.html` | Vertical white cards — 4:5 photo, index bottom-left, name above a role + icon row |

### CTA concepts per variation

The CTAs all ask the visitor to get a quote but are presented differently. **Every CTA sits on a black section** (white cards above, black CTA below, then the footer):

| Page | CTA |
|---|---|
| `team.html` | Four service cards (Design / SEO / Development / Analytics, home-page alternating style) + heading + button |
| `team-v1.html` | Centered text heading + button |
| `team-v2.html` | Website-wireframe monitor mockup beside heading + button |
| `team-v3.html` | Terminal window with mono lines and a blinking cursor + heading + button |
| `team-v4.html` | Split layout — heading + button left, animated brand bars right |
| `team-v5.html` | A monitor frame containing the heading, subtext, button and a mini wireframe inside it |

### Image handling

All team image URLs point to the live site at `https://whitelabelresell.com`. No local image downloads are required — the HTML files are self-contained and will load images from the production server. Each person-to-image mapping was verified by inspecting each Elementor profile card's `<img>` source within the same container as the name and role text.

### Rendering note (why the pages are plain JS)

These pages originally used the Babel in-browser transpiler (`type="text/babel"`) and loaded `v7-shared.jsx` as an external script. When opened directly via `file://`, the browser blocks Babel's XHR fetch of the local `.jsx` file (CORS), so `window.V7` was undefined and the page crashed blank with `TypeError: Cannot read properties of undefined (reading 'ThreeBar')`. Each team page was therefore rewritten as fully self-contained plain JavaScript using `React.createElement` — no Babel, no external script dependencies — so they work both from `file://` and any static server.
