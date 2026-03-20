---
name: studio-forms-email
description: >-
  Changes contact or registration form fields, validation, or email delivery for Next Step Dance Studio.
  Use when the user mentions forms, registration, contact form, Resend, Netlify functions,
  validation errors, or files under shared/ or netlify/functions/.
---

# Forms and email (technical)

## Layout

- **Shared Zod schemas** (browser + functions must stay aligned): `shared/contact.schema.ts`, `shared/registration.schema.ts`.
- **Netlify functions**: `netlify/functions/send-contact.ts`, `netlify/functions/send-registration.ts`.
- **HTML email templates**: `shared/email-html.ts` (if referenced by functions).

## When changing fields

1. Update the Zod schema and any React form in **`src/routes/`** (e.g. `ContactPage`, `RegistrationPage`) together.
2. Update the corresponding Netlify function to read the new shape and include it in the email body.
3. Run **`pnpm test`** — Vitest covers the shared schemas.

## Environment (production)

See README → **Environment variables (Netlify / production)**. Missing **`RESEND_API_KEY`** causes emails not to send. **`TO_EMAIL`** / **`FROM_EMAIL`** override defaults documented there.

## Local email preview

In dev, **`/dev/email-preview`** renders email HTML (dev-only route per README).
