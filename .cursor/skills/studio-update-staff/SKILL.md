---
name: studio-update-staff
description: >-
  Adds, removes, or edits instructor profiles for Next Step Dance Studio.
  Use when the user mentions staff, teachers, instructors, bios, headshots,
  or src/data/staff.ts.
---

# Update staff / instructors

## Source of truth

1. Read field definitions in [README.md](../../../README.md) → section **Staff — `src/data/staff.ts`**.
2. Edit **`src/data/staff.ts`** only for routine updates.

## Rules

- **`bio`**: either a single quoted string or an array of strings (one per paragraph). See README examples.
- **`specialties`**: array of short labels shown as tags.
- **`photo`**: optional **https URL** or site path such as `'/images/staff/jane.jpg'` with the file at **`public/images/staff/jane.jpg`**. Chat-attached images are not files on disk — the user must place the image in **`public/`** first.
- **Order** in the `instructors` array is display order on the Staff page.

## After edits

- **`pnpm lint`** or **`pnpm exec eslint .`** as appropriate.
- **`pnpm exec tsc --noEmit`** if TypeScript errors appear.
