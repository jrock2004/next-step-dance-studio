# Form Submission — Decision Pending

Both the Contact and Registration pages have forms that currently only `console.log` data. A backend solution is needed before launch.

## Hosting determines the approach

The right solution depends on where the site is hosted.

### If hosted on Vercel / Netlify / similar (serverless-friendly)

| Form | Approach |
|---|---|
| Contact | Resend API via serverless function |
| Registration | Resend API via serverless function |

- **Resend** (resend.com) — free tier is 3,000 emails/month, data goes straight to Missy's inbox
- Requires one small serverless function file per form (or a shared handler)
- Best option for privacy — registration collects children's names, ages, addresses, parent info

If on **Netlify specifically**, their built-in form handling also works with zero backend code (free tier: 100 submissions/month).

### If hosted on GoDaddy shared hosting

GoDaddy shared hosting serves static files but does not support Node.js serverless functions natively.

| Form | Approach |
|---|---|
| Contact | Formspree (formspree.io) — no backend needed, free tier 50/month |
| Registration | PHP + PHPMailer via GoDaddy's SMTP — keeps children's data off third-party servers |

- GoDaddy includes PHP and SMTP, so a small `submit-registration.php` handler works cleanly
- React form would `fetch('/submit-registration.php', { method: 'POST' })`

---

## Action items once hosting is confirmed

- [ ] Confirm hosting provider
- [ ] Set up form submission handler (see approach above)
- [ ] Wire up `onSubmit` in `ContactPage.tsx` and `RegistrationPage.tsx` (currently just `console.log`)
- [ ] Test email delivery to missy@thenextstepdance.com
