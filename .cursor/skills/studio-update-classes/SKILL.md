---
name: studio-update-classes
description: >-
  Adds, removes, or edits dance class listings for Next Step Dance Studio.
  Use when the user mentions classes, class descriptions, pricing on the Classes
  page, homepage featured classes, or src/content/classes.json.
---

# Update dance classes

## Before you change anything

If the user asks to **add** or **substantially rewrite** a class but does not give **title, ages, price, summary, description** (and `featured` if it matters), **ask for that copy** instead of inventing studio-specific pricing or curricula. Guessing IDs from vague names is OK only when the user confirmed the title slug they want.

## Source of truth

Content is managed via the **Decap CMS** at `/admin` → Classes, which saves to **`src/content/classes.json`**. When editing programmatically, edit that JSON file directly. Read field definitions in [README.md](../../../README.md) → section **Classes**.

The `src/data/classes.ts` file is a thin TypeScript wrapper around this JSON — do not edit it for content changes.

## Rules

- **`id`**: unique, lowercase, kebab-case slug (e.g. `hip-hop`). Never duplicate IDs.
- **`featured`**: `true` shows the class on the homepage; `false` hides it there.
- **Order** in the `classes` array is the order used where the UI lists classes (unless a page sorts differently — check the page component if unsure).
- Optional fields: omit `image` or `note` entirely if unused.
- **`image`**: may be a full **https URL** or a **site path** for files under **`public/`**, e.g. `'/images/classes/tap.jpg'` → `public/images/classes/tap.jpg`. If the user only pasted a picture in chat, tell them to **save or drag the file** into `public/images/classes/` (or similar), then set the path.

## After edits

- Run **`pnpm exec tsc --noEmit`** if types were touched or the user reports build errors.

## What not to do

- Do not edit **`src/data/gallery-manifest.gen.ts`** for class images — class images use URLs/paths in `classes.json`.
- Do not edit **`src/data/classes.ts`** for content — it reads from `src/content/classes.json`.
