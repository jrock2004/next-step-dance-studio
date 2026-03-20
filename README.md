# Next Step Dance Studio — Website

Website for [The Next Step Dance Studio](https://thenextstepdance.com) in Birdsboro, PA. Built with React, TypeScript, and Vite.

---

## Updating Website Content

Most content changes don't require touching any page code. The three files below are the only ones you need to edit for routine updates.

### Classes — `src/data/classes.ts`

Each class is an object in the `classes` array. Fields:

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Unique slug, no spaces (e.g. `"hip-hop"`) |
| `title` | Yes | Class name shown on the page |
| `ages` | Yes | Age range (e.g. `"Ages 5–6"` or `"All Ages & Levels"`) |
| `price` | Yes | Pricing text (e.g. `"$55"` or `"Call for pricing"`) |
| `description` | Yes | Full paragraph shown on the Classes page |
| `summary` | Yes | Short one-liner shown in cards and previews |
| `image` | No | URL to a photo for this class |
| `note` | No | Small print shown below the description (e.g. prerequisites) |
| `featured` | Yes | `true` to show this class on the homepage, `false` to exclude it |

**To add a class:** Copy an existing object, paste it at the end of the array (before the closing `]`), and fill in the fields.

**To remove a class:** Delete the entire object from the array.

---

### Staff — `src/data/staff.ts`

Each instructor is an object in the `instructors` array. Fields:

| Field | Required | Description |
|---|---|---|
| `name` | Yes | Full name |
| `title` | Yes | Job title shown under their name |
| `specialties` | Yes | List of classes they teach (shown as tags) |
| `photo` | No | URL to a headshot photo. Leave out if no photo yet. |
| `bio` | Yes | One paragraph as a string, or multiple paragraphs as a list of strings |

**Single-paragraph bio:**
```ts
bio: 'Miss Jane has taught ballet for 20 years...',
```

**Multi-paragraph bio:**
```ts
bio: [
  'First paragraph here.',
  'Second paragraph here.',
],
```

**To add an instructor:** Copy an existing object and add it to the array.

**To remove an instructor:** Delete the entire object from the array.

**Instructor order** on the page follows the order they appear in the array.

---

### Recital — `src/data/recital.ts`

Update this file each season. Any field set to `null` will automatically display a "coming soon" placeholder on the website — no other changes needed.

```ts
const recital: RecitalData = {
  season: '2025–2026',

  // Replace null with the actual date/time once confirmed:
  dateTime: null,
  // Example: dateTime: 'Saturday, June 7, 2025 at 2:00 PM & 6:00 PM',

  // Replace null with the venue name and address:
  venue: null,
  // Example: venue: 'Boyertown Area Senior High School, 120 N Monroe St, Boyertown, PA',

  tickets: {
    generalAdmission: null,   // Example: '$15'
    reservedSeating: null,    // Example: '$20'
    salesOpen: null,          // Example: 'May 1, 2025'
  },

  // Add seniors here once info is collected. null = "coming soon" message shown.
  seniors: null,
  // Example with seniors filled in:
  // seniors: [
  //   { name: 'Jane Smith', bio: 'Jane has danced at Next Step since age 4...' },
  //   { name: 'Emily Jones', photo: 'https://...', bio: 'Emily plans to study dance at...' },
  // ],
}
```

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

Contact and registration forms POST to Netlify Functions. Set these in the Netlify UI (or `.env` for local `netlify dev`):

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
- Staff and class photos still reference the old website's CDN (`nebula.wsimg.com`). These should be replaced with self-hosted images when the client provides new photos.

### Forms & email

Submissions go to `/.netlify/functions/send-contact` and `send-registration`, which email via Resend when `RESEND_API_KEY` is set. Shared validation lives in `shared/` so the browser and functions stay aligned.

### Local email preview

With `pnpm dev` / Vite dev, visit `/dev/email-preview` to render the same HTML as production (not included in production builds).

### Bundle size & images

Routes besides the home page are **lazy-loaded** in `src/router.tsx`, so Framer Motion, the gallery carousel, and other page-specific code stay in separate chunks until navigation.

### Gallery pipeline

Full-size JPEGs live in `src/assets/gallery/` (not shipped as giant imports). On **`pnpm build`** and **`pnpm dev:vite`** (via `predev:vite`), `scripts/optimize-gallery.mjs` runs **sharp** to write responsive WebP widths + JPEG fallbacks under `public/gallery/`, and refreshes `src/data/gallery-manifest.gen.ts`.

- Add or remove photos in `src/assets/gallery/`, then run **`pnpm optimize:gallery`** (or just run dev/build).
- Generated binaries are in **`public/gallery/`** (gitignored); the manifest is committed so TypeScript knows each image `stem` and `alt` text.
