---
name: studio-update-classes
description: >-
  Adds, removes, or edits dance class listings for Next Step Dance Studio.
  Use when the user mentions classes, class descriptions, pricing on the Classes
  page, homepage featured classes, or src/data/classes.ts.
---

# Update dance classes

## Source of truth

1. Read field definitions in [README.md](../../../README.md) → section **Classes — `src/data/classes.ts`**.
2. Edit **`src/data/classes.ts`** only. Do not change `ClassesPage.tsx` for routine text or pricing updates.

## Rules

- **`id`**: unique, lowercase, kebab-case slug (e.g. `hip-hop`). Never duplicate IDs.
- **`featured`**: `true` shows the class on the homepage; `false` hides it there.
- **Order** in the `classes` array is the order used where the UI lists classes (unless a page sorts differently — check the page component if unsure).
- Preserve valid TypeScript: commas between objects, matching quotes, trailing commas per Prettier.
- Optional fields: omit `image` or `note` entirely if unused (do not set to empty string unless the type allows and the UI handles it).
- **`image`**: may be a full **https URL** or a **site path** for files under **`public/`**, e.g. `'/images/classes/tap.jpg'` → `public/images/classes/tap.jpg`. If the user only pasted a picture in chat, tell them to **save or drag the file** into `public/images/classes/` (or similar), then set the path.

## After edits

- Run **`pnpm exec eslint .`** on changed files if the user cares about CI, or **`pnpm lint`** for the whole project.
- Run **`pnpm exec tsc --noEmit`** if types were touched or the user reports build errors.

## What not to do

- Do not edit **`src/data/gallery-manifest.gen.ts`** for class images — class images use URLs in `classes.ts`.
