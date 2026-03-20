---
name: studio-update-recital
description: >-
  Updates recital season info, venue, tickets, and senior spotlights for Next Step Dance Studio.
  Use when the user mentions recital, showcase, tickets, venue, seniors, or src/data/recital.ts.
---

# Update recital content

## Before you change anything

Do not invent **venue, dates, ticket prices, or senior names/bios**. If the user has not pasted finalized details, **ask** what to set or leave fields as **`null`** (coming soon) per README.

## Source of truth

1. Read [README.md](../../../README.md) → section **Recital — `src/data/recital.ts`**.
2. Edit **`src/data/recital.ts`**.

## Rules

- **`null` means “coming soon”** in the UI for that field — use `null` until details are finalized.
- When filling **`seniors`**, follow the object shape in the README example (`name`, `bio`, optional `photo`).
- Keep **`season`** string updated for the current academic/recital year label.

## After edits

- **`pnpm exec tsc --noEmit`** to confirm types still match `RecitalData`.
