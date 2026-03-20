# Cursor prompts for routine site work

Open **Cursor Chat** (or Agent), paste a prompt below, and fill in the brackets. The project includes **Skills** under `.cursor/skills/` so the assistant prefers the right files and checks the README.

---

## Classes

**Add a class**

> Add a new dance class to the site. Title: **[name]**, ages: **[range]**, price text: **[e.g. Call for pricing]**, summary (one line for cards): **[text]**, full description: **[paragraph]**. Featured on homepage: **[yes/no]**. Optional image: **[full https URL, or say “local file” and put the path after you drop the file — see Local photos below]**  
> Follow `README.md` and `src/data/classes.ts`. Use a unique `id` slug like **`[kebab-case-name]`**.

**Update or remove**

> Update the class **`[id or title]`** in `src/data/classes.ts`: change **[field]** to **[new value]**.  
> Or: Remove the class **`[title]`** from the site entirely.

---

## Staff

**Add an instructor**

> Add a staff member: name **[name]**, title **[role]**, specialties **[list]**, bio: **[paragraph or multiple paragraphs]**. Photo: **[https URL, or local path like `/images/staff/file.jpg` after you save the file under `public/images/staff/`, or omit]**.

**Edit order or bio**

> On the Staff page, move **[name]** to **[first / last / after Person X]**.  
> Or: Update **[name]’s** bio to: **[new text]**.

---

## Recital

**Season details**

> Update `src/data/recital.ts` for the **[20xx–20yy]** season. Set **[date/time / venue / ticket prices / sales date]** to: **[details]**. Leave anything not finalized as `null`.

**Seniors**

> Add recital seniors: **[Name — short bio], [Name — short bio], …** (and photos if we have URLs).

---

## Photos (gallery)

> I added new JPEGs to **`src/assets/gallery/`** named **[…]**. Run the gallery pipeline and make sure the site still builds.  
> Or: Remove gallery photos for **[filenames]** and regenerate.

---

## Local photos (a file on your computer, not a website link)

**Pasting or attaching a picture in Cursor chat** only lets the assistant **see** it (for advice, cropping ideas, or alt text). It does **not** copy the file into this project, and the live site cannot use a “pasted” image by itself.

**What works:** save the file **into this repo** (drag from Finder into the Cursor sidebar), then ask the assistant to wire it up.

| Goal | Where to put the file | What to tell Cursor |
|------|------------------------|---------------------|
| **Gallery page** (carousel) | **`src/assets/gallery/`** — **JPEG** (convert iPhone HEIC first) | “I dropped **[filename]** in `src/assets/gallery/`. Run the gallery step / build.” |
| **Class listing photo** | e.g. **`public/images/classes/`** (create the folder if needed) | “I saved **[file]** in **`public/images/classes/`**. Set class **`[id]`** `image` to **`/images/classes/[file]`**.” |
| **Staff headshot** | e.g. **`public/images/staff/`** | Same idea: `photo: '/images/staff/[file]'`. |
| **Recital senior photo** | e.g. **`public/images/recital/`** | `photo: '/images/recital/[file]'` in `recital.ts`. |

**Path rule:** whatever sits at **`public/images/...`** is linked in code as **`/images/...`** (leading slash, no `public` in the string).

**Quick prompts after you’ve saved the file**

> I put **`[filename]`** in **`public/images/classes/`**. Update **`[class id or title]`** so `image` is **`/images/classes/[filename]`**.

> I put **`[filename]`** in **`public/images/staff/`**. Set **`[instructor name]`**’s `photo` to **`/images/staff/[filename]`**.

---

## Page wording (not class/staff data)

**Home or any page**

> Change the **[section/Cursor: e.g. homepage hero / “Expert Instructors” card]** text. New wording: **[paste or describe]**. Keep the layout the same.

**Google / social preview**

> Update the SEO title and description for the **[page name]** page to: title **[…]**, description **[…]**.

---

## Forms & email (more technical)

> Contact form / registration emails aren’t arriving. Check README env vars and **`netlify/functions`**.  
> Or: Add a form field **[field name]** for **[purpose]**. Update the form, validation in **`shared/`**, tests, and the email template.

---

## Sanity check before publishing

> Run **`pnpm lint`**, **`pnpm test`**, and **`pnpm build`**. Fix anything that fails and summarize what you changed.

---

## Tips for non-technical editors

1. **Pull latest** from git before editing (or ask the assistant to help with git).
2. **Describe outcomes** in plain language (“Put Jazz back on the homepage”) — the assistant can set `featured: true/false`.
3. **Paste text** from a Word doc or email when you have final copy; ask the assistant to fix smart quotes or stray characters if the build complains.
4. For **gallery** photos, use **JPEG** in `src/assets/gallery/`; rename files to meaningful words so alt text is readable (see README). For **class/staff** pictures, use **`public/images/...`** and paths starting with **`/images/`** — see **Local photos** above (chat paste alone is not enough).
