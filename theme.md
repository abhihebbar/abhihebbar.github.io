# Theme doc for /mysite

## Purpose
This document defines the **visual system** for Abhi's personal site at `/mysite/`.

It is **not** a content document.
It should guide:
- colors
- typography
- spacing
- layout rhythm
- buttons / links
- cards / dividers
- portrait treatment
- general UI/UX feel

## Overall design intent
The site should feel:
- editorial
- thoughtful
- premium but restrained
- modern
- personal without being soft or fluffy
- calm, sharp, and confident

Avoid:
- startup landing page energy
- dashboard UI
- loud gradients
- flashy AI aesthetics
- clutter
- overly decorative components
- template-like card overload

---

## Color system

### Primary palette
- **Background:** `#f7f5f0`
- **Surface / paper:** `#fffdf8`
- **Primary text:** `#161616`
- **Muted text:** `#6b665d`
- **Border / divider:** `#ddd6c9`
- **Accent:** `#2d4a7c`
- **Accent soft:** `#e8eef8`

### Usage guidance
- Backgrounds should stay light and quiet.
- Accent color should be used sparingly for links, small highlights, and subtle emphasis.
- Borders should be visible but soft.
- Contrast should feel clean and readable, never washed out.

### Optional secondary accents
Use only lightly and never all at once:
- deep forest: `#31453b`
- muted burgundy: `#6b3d3d`
- warm stone: `#b8a58c`

---

## Typography

### Direction
Typography should carry a lot of the personality.
The site should feel text-led rather than component-led.

### Type pairing
- **Headline / display:** serif
  - preferred feel: literary, editorial, intelligent
  - examples: `Newsreader`, `Cormorant Garamond`, `Georgia`
- **Body / UI:** sans-serif
  - preferred feel: neutral, modern, highly readable
  - examples: `Inter`, `Manrope`, `System UI`

### Suggested type scale
- **Hero title:** 56–72px desktop, 38–48px mobile
- **Section heading:** 26–34px
- **Body:** 17–20px
- **Small label / eyebrow:** 11–13px uppercase with letter spacing
- **Nav:** 14–15px

### Typography rules
- Keep line lengths comfortable.
- Use strong hierarchy through size and spacing, not boldness everywhere.
- Avoid too many font weights.
- Headings should feel elegant, not aggressive.
- Body copy should feel quiet and highly readable.

---

## Layout and spacing

### Page rhythm
The layout should feel spacious and composed.
Use whitespace as structure.
Do not rely on lots of boxes.

### Direction
- strong hero with generous top spacing
- content width should feel editorial, not app-like
- sections separated by spacing and subtle rules
- single-column bias with occasional structured subgrids
- avoid dense, multi-column dashboard layouts

### Width guidance
- **Main content width:** ~720px to 980px
- **Narrow text column:** ~640px to 760px where appropriate
- **Use wider width only when it improves rhythm, not to fill space**

### Spacing guidance
- section padding should feel generous
- consistent vertical rhythm matters more than decorative separators
- cards, if used, should be rare and intentional

---

## Navigation

### Feel
Navigation should be simple, quiet, and confident.

### Guidance
- minimal number of links
- no loud CTA button in the nav
- subtle hover states
- no heavy backgrounds or pills by default

### Good nav style
- light text links
- small size
- lots of breathing room
- understated active/hover states

---

## Buttons and links

### Buttons
Buttons should feel calm and intentional.

Preferred style:
- one primary button style at most
- soft radius
- not too chunky
- minimal shadow or none
- no loud gradients

### Links
Links should do more work than buttons overall.
Preferred link behavior:
- clear color contrast
- elegant underline / hover treatment
- no overly bright blue default browser look

---

## Cards, panels, and surfaces

Use sparingly.
If cards are used:
- they should feel like paper panels, not SaaS widgets
- low contrast background shifts
- soft border
- moderate radius
- minimal shadow

Avoid:
- stacking many equal-weight cards
- metric/dashboard tile feel
- overly glossy surfaces

---

## Portrait / imagery treatment

Portrait use should be secondary.
It should support the page, not dominate it.

### Guidance
- smaller crop preferred
- author-photo energy, not hero-headshot energy
- natural, tasteful, composed
- no corporate portrait styling
- no over-processed image effects
- can sit in margin / side column / adjacent to hero

### If no portrait
The page should still work beautifully without imagery.
Typography and spacing should carry the design.

---

## Interaction design

### UX direction
- immediate clarity
- low noise
- easy scanning
- strong readability
- no gimmicky animations

### Motion
If motion is used:
- subtle only
- short fades / gentle shifts
- no parallax, no flashy reveal choreography

### Responsive behavior
- typography must scale cleanly
- nav should stay simple on mobile
- layout should collapse gracefully without becoming card soup
- spacing should remain generous on smaller screens

---

## Design references (style, not content)
Think closer to:
- editorial portfolio
- thoughtful founder website
- modern essay page
- premium personal site

Think less like:
- SaaS marketing page
- web app dashboard
- crypto landing page
- AI product promo page

---

## Practical rule
When making design decisions, prefer:
1. typography over decoration
2. spacing over containers
3. clarity over novelty
4. restraint over feature density
5. one strong visual idea over many small tricks

---

## Supporting files
- Theme reference page: `theme.html`
- Main homepage: `index.html`
- Primary styles: `css/home.css`
