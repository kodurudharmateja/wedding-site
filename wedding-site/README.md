# Wedding Invitation Site

Static site: no build step, no dependencies. Open `index.html` or host the folder anywhere.

## Structure
```
wedding-site/
├── index.html                  Page markup (sections in page order) + script tags
├── css/
│   ├── main.css                Entry: @imports everything. ORDER MATTERS
│   ├── tokens.css              Colours + fonts (change the palette here)
│   ├── base.css                Reset, typography, .wrap/.dark/.sub helpers
│   ├── utilities.css           .rv reveal + reduced-motion (keep last)
│   ├── components/             button, photo, nav, music-button, lightbox, petals
│   └── sections/               intro, hero, invitation, countdown, story, divider,
│                               events, gallery, venue, family, closing, footer
├── js/
│   ├── config/site.config.js   Names, dates, venue, contacts, links, music, photo path
│   ├── data/                   nav, story, events, gallery (content lists)
│   ├── core/                   dom.js ($, $$, fill) and photo.js (image loader)
│   ├── features/               one file per behaviour (init*/render* function each)
│   └── main.js                 Boot order
└── assets/
    ├── images/couple|events|venue/
    ├── audio/
    └── icons/favicon.svg
```

## Where do I edit...?
| I want to change | File |
|---|---|
| Names, date, venue, phone, WhatsApp, Maps link, Instagram | `js/config/site.config.js` |
| Colours / fonts | `css/tokens.css` |
| Story milestones | `js/data/story.js` |
| Event list, dates, venues, colours | `js/data/events.js` |
| Gallery count / tile layout / captions | `js/data/gallery.js` |
| Menu items | `js/data/nav.js` (+ section `id` in index.html) |
| A section's look | `css/sections/<name>.css` |
| A section's text/markup | `index.html` (commented blocks) |
| Temple / Rama-Sita artwork | `js/features/art.js` |
| Music | `js/features/music.js` or set `CFG.music` |

## Photos (jpg, flat per folder)
- `assets/images/couple/COUPLE_PHOTO_01.jpg` … `_20.jpg` (first 4 also used in Story)
- `assets/images/events/EVENT_PHOTO_01.jpg` … `_08.jpg`
- `assets/images/venue/VENUE_PHOTO.jpg`
Missing files show a labelled placeholder. The folder is picked from the filename prefix (`js/core/photo.js`).

## Rules to keep it stable
1. **Script order in index.html matters** (config/data → core → features → main).
2. Each feature keeps its variables inside its `init*/render*` function, so files never clash.
3. Anything rendered dynamically must be rendered **before** `initEffects()` in `main.js`, or its scroll-reveal won't trigger.
4. New section = new `css/sections/x.css` + one `@import` line (before `utilities.css`) + markup in `index.html`.
5. New feature = new `js/features/x.js` + a `<script>` tag + a call in `main.js`.
6. Before going live: placeholders `[LIKE_THIS]` in `index.html` (title, og tags, Telugu blessing, canonical URL) still need replacing.
