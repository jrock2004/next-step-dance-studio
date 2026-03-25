---
name: studio-marketing-copy
description: >-
  Edits headlines, taglines, homepage feature blurbs, and SEO meta tags in Next Step Dance Studio
  route components. Use when the user wants wording on a specific page (not class/staff/recital data),
  mentions Helmet title/description, or hero text on Home, Classes, Contact, etc.
---

# Marketing & page copy (in components)

## Before you change anything

If the request is vague (“make the hero better”, “update the copy”) and the user did not supply **replacement text or clear intent**, **ask** what message they want (or offer 2–3 short options) instead of shipping large rewrites they did not approve.

## When to use this vs data files

- **Classes, staff, recital:** edit via CMS at `/admin` or directly in **`src/content/classes.json`**, **`staff.json`**, **`recital.json`** — see other studio-* skills and [README.md](../../../README.md).
- **This skill:** copy lives directly in **`src/routes/*.tsx`** (e.g. hero sections, bullet features, footer blurbs) or in **`<Helmet>`** `<title>` / `<meta name="description">`.

## Rules

- Change **string content only** unless the user explicitly wants layout or new sections.
- Keep **tone** consistent with surrounding text (warm, community-focused, clear).
- After edits: **`pnpm lint`** and **`pnpm exec tsc --noEmit`**.
- Do not remove **`Helmet`** tags without replacing SEO metadata.

## Finding the right file

| Path segment / topic | Likely file |
|---------------------|-------------|
| Home | `src/routes/HomePage.tsx` |
| Classes page chrome (not listings) | `src/routes/ClassesPage.tsx` |
| Staff page chrome | `src/routes/StaffPage.tsx` |
| Contact | `src/routes/ContactPage.tsx` |
| Registration | `src/routes/RegistrationPage.tsx` |
| Shared layout / nav | `src/routes/Root.tsx` or components under `src/components/` |

Use search (e.g. exact phrase from the live site) if unsure.
