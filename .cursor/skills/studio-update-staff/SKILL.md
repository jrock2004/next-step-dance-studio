---
name: studio-update-staff
description: >-
  Adds, removes, or edits instructor profiles for Next Step Dance Studio.
  Use when the user mentions staff, teachers, instructors, bios, headshots,
  or src/content/staff.json.
---

# Update staff / instructors

## Before you change anything

**Do not guess** name, title, `specialties`, `bio`, or which headshot file belongs to which person. Do not infer identity from git username, workspace folder names, or a generic filename (e.g. `MyAccountPic.jpg`).

If the user has **not** already supplied that information in the same message, **ask first** — minimally:

1. **Full name** (as it should appear on the site)
2. **Title** (e.g. Dance Instructor, Owner & Artistic Director)
3. **`specialties`** — short labels for the styles/classes they teach (or confirm none / leave tags off)
4. **`bio`** — final paragraph(s) from the studio, or permission to use a short "coming soon" placeholder they will replace later
5. **Photo** — confirm path under `public/images/staff/` or URL (and preferred filename if they are adding a new file)

Only after you have answers (or explicit approval for a labeled placeholder) should you edit `staff.json` or rename/move image files.

## Source of truth

Content is managed via the **Decap CMS** at `/admin` → Staff, which saves to **`src/content/staff.json`**. When editing programmatically, edit that JSON file directly. Read field definitions in [README.md](../../../README.md) → section **Staff**.

The `src/data/staff.ts` file is a thin TypeScript wrapper around this JSON — do not edit it for content changes.

## Rules

- **`bio`**: either a single string or an array of strings (one per paragraph).
- **`specialties`**: array of short labels shown as tags.
- **`photo`**: optional site path such as **`'/images/staff/name.webp'`** (file in **`public/images/staff/`**) or an **https URL**. Prefer self-hosted **`public/images/staff/`** so headshots are not tied to a third-party CDN. Chat-attached images are not files on disk — place the file under **`public/`** first (WebP or JPEG is fine).
- **Order** in the `instructors` array is display order on the Staff page.

## After edits

- **`pnpm exec tsc --noEmit`** if TypeScript errors appear.

## What not to do

- Do not edit **`src/data/staff.ts`** for content — it reads from `src/content/staff.json`.
