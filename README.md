# Next Step Dance Studio — Website

Website for [The Next Step Dance Studio](https://thenextstepdance.com) in Birdsboro, PA. Built with React, TypeScript, and Vite.

---

## Updating Website Content

Most content changes don't require touching any page code. Content is managed through the **Decap CMS** — log in at **`/admin`** on the live site (requires Netlify Identity access).

**Editing files directly or with an AI assistant:** the CMS saves to JSON files under `src/content/`. You can edit those files directly — field definitions are documented below.

**Using Cursor:** copy-paste prompts for common tasks are in [`.cursor/prompts.md`](.cursor/prompts.md). Project **Agent Skills** in [`.cursor/skills/`](.cursor/skills/) steer the assistant toward the right files and conventions.

### Classes — `src/content/classes.json`

Each class is an object in the `classes` array. Fields:

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Unique slug, no spaces (e.g. `"hip-hop"`) |
| `title` | Yes | Class name shown on the page |
| `ages` | Yes | Age range (e.g. `"Ages 5–6"` or `"All Ages & Levels"`) |
| `price` | Yes | Pricing text (e.g. `"$55"` or `"Call for pricing"`) |
| `description` | Yes | Full paragraph shown on the Classes page |
| `summary` | Yes | Short one-liner shown in cards and previews |
| `image` | No | Photo URL (`https://…`) **or** a path to a file in **`public/`**, e.g. `/images/classes/tap.jpg` → file at `public/images/classes/tap.jpg` |
| `note` | No | Small print shown below the description (e.g. prerequisites) |
| `featured` | Yes | `true` to show this class on the homepage, `false` to exclude it |

**To add a class:** Add a new object to the `classes` array and fill in the fields.

**To remove a class:** Delete the entire object from the array.

---

### Staff — `src/content/staff.json`

Each instructor is an object in the `instructors` array. Fields:

| Field | Required | Description |
|---|---|---|
| `name` | Yes | Full name |
| `title` | Yes | Job title shown under their name |
| `specialties` | Yes | List of classes they teach (shown as tags) |
| `photo` | No | Headshot URL (`https://…`) **or** `/images/staff/name.jpg` under **`public/images/staff/`**. Omit if no photo yet. |
| `bio` | Yes | One paragraph as a string, or multiple paragraphs as a list of strings |

**To add an instructor:** Add a new object to the `instructors` array.

**To remove an instructor:** Delete the entire object from the array.

**Instructor order** on the page follows the order they appear in the array.

**Local files:** Save images into **`public/`** (e.g. `public/images/classes/`, `public/images/staff/`), then reference them with a path that starts with **`/`** and skips the `public` segment.

---

### Recital — `src/content/recital.json` + `src/content/recitalProgram.json`

**`recital.json`** — season details, venue, tickets, and senior spotlights. Any field set to `null` will automatically display a "coming soon" placeholder on the website.

| Field | Description |
|---|---|
| `season` | Label for the current year, e.g. `"2025–2026"` |
| `dateTime` | e.g. `"Saturday, June 7, 2025 at 2:00 PM"` — `null` shows "Coming Soon" |
| `venue` | Venue name and address — `null` shows "Coming Soon" |
| `tickets.generalAdmission` | e.g. `"$15"` — `null` shows "TBA" |
| `tickets.reservedSeating` | e.g. `"$20"` — `null` shows "TBA" |
| `tickets.salesOpen` | e.g. `"May 1, 2025"` — `null` shows "TBA" |
| `seniors` | Array of senior spotlight objects — `null` shows "Coming Soon" |

**`recitalProgram.json`** — the full show program with performances, section headers, and intermissions. Managed via the CMS "Recital Program" collection.

---

## Developer Setup

**Requirements:** Node.js 20+, [pnpm](https://pnpm.io)

```bash
# Install dependencies
pnpm install

# Start the dev server (hot reload)
pnpm dev

# Type-check
pnpm tsc --noEmit

# Build for production
pnpm build

# Preview the production build locally
pnpm preview

# Unit tests (shared Zod schemas)
pnpm test
```

### Environment variables (Netlify / production)

Set these in the Netlify UI (or `.env` for local `netlify dev`) when email delivery via Resend is enabled:

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | [Resend](https://resend.com) API key for sending email |
| `TO_EMAIL` | No | Recipient inbox (defaults to `missy@thenextstepdance.com`) |
| `FROM_EMAIL` | No | Verified sender domain address (defaults to `noreply@thenextstepdance.com`) |

---

## Tech Stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev) (with [Rolldown](https://rolldown.rs) bundler)
- [Tailwind CSS v4](https://tailwindcss.com) — theme defined via `@theme` in `index.css`
- [React Router 7](https://reactrouter.com)
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) — form validation
- [Framer Motion](https://www.framer.com/motion/) — animations
- [React Helmet Async](https://github.com/staylor/react-helmet-async) — page `<head>` management
- [Decap CMS](https://decapcms.org) — content management at `/admin`

---

## Design Tokens

Colors and fonts are defined as CSS custom properties in `src/index.css` and available as Tailwind classes:

| Token | Value | Tailwind class example |
|---|---|---|
| `--color-studio-purple` | `#2d0052` | `bg-studio-purple`, `text-studio-purple` |
| `--color-studio-purple-mid` | `#6b21a8` | `text-studio-purple-mid` |
| `--color-studio-purple-light` | `#f3e8ff` | `bg-studio-purple-light` |
| `--color-studio-pink` | `#db2777` | `bg-studio-pink`, `text-studio-pink` |
| `--color-studio-pink-light` | `#fce7f3` | `bg-studio-pink-light` |

Fonts: **Playfair Display** (serif, used for `h1`/`h2` via `font-serif`) and **Nunito Sans** (sans-serif, body text).

---

## Known Issues

- `sharp` and `svgo` optional dependencies for `vite-plugin-image-optimizer` may log warnings during install — this is harmless.
- Some class and marketing images still reference the old website's CDN (`nebula.wsimg.com`). Replace with self-hosted assets when convenient. Staff headshots live under `public/images/staff/`.

### Forms & email

Forms use Netlify's built-in form handling — submissions are stored in the Netlify dashboard. Netlify Functions (`send-contact`, `send-registration`) using Resend are present but not yet wired to the forms. Shared validation lives in `shared/` so the browser and functions stay aligned.

### Local email preview

With `pnpm dev` / Vite dev, visit `/dev/email-preview` to render the same HTML as production email templates (not included in production builds).

### Bundle size & images

Routes besides the home page are **lazy-loaded** in `src/router.tsx`, so Framer Motion, the gallery carousel, and other page-specific code stay in separate chunks until navigation.

### Gallery pipeline

Full-size JPEGs live in `src/assets/gallery/` (not shipped as giant imports). On **`pnpm build`** and **`pnpm dev:vite`** (via `predev:vite`), `scripts/optimize-gallery.mjs` runs **sharp** to write responsive WebP widths + JPEG fallbacks under `public/gallery/`, and refreshes `src/data/gallery-manifest.gen.ts`.

- Add or remove photos in `src/assets/gallery/`, then run **`pnpm optimize:gallery`** (or just run dev/build).
- Generated binaries are in **`public/gallery/`** (gitignored); the manifest is committed so TypeScript knows each image `stem` and `alt` text.
