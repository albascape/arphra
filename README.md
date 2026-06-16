# ARFA

Marketing site for **ARFA** — a founder-led boutique platform focused on private
capital strategy, portfolio architecture and independent analytical support.

> Independent thinking for private capital.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, React 19)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- `next/font` (Newsreader + Inter)
- Optimised for deployment on [Vercel](https://vercel.com)

## Pages

| Route                | Page              |
| -------------------- | ----------------- |
| `/`                  | Home              |
| `/about`             | About             |
| `/services`          | Services          |
| `/who-we-work-with`  | Who We Work With  |
| `/how-we-work`       | How We Work       |
| `/insights`          | Insights          |
| `/contact`           | Contact           |

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. In Vercel, **New Project → Import** the repo.
3. Framework preset is detected automatically (Next.js) — no extra configuration
   is required.
4. Deploy.

### Design notes

The visual language is institutional and composed: full-bleed dark photographic
heroes, a classic **Newsreader** serif for display type and Inter for body copy, a
single confident **blue** accent, and the signature **two-tone heading** (a muted
grey lead-in resolving into a strong emphasis). Light and dark sections alternate,
a right-side section-dot navigation tracks scroll position on the home page, and
circular scroll affordances echo the reference aesthetic. It is an original design
built in that spirit — not a copy.

**Imagery:** the photographic backgrounds are hotlinked from Unsplash's CDN (see
`lib/site.ts → images`) and each sits over a solid dark base, so the design
degrades gracefully if an image fails. Replace them with self-hosted, licensed
images in `/public` before launch.

### Contact form

The contact form currently uses a `mailto:` fallback and a confirmation state. To
wire it to a real backend (e.g. Resend, Formspree, or a Next.js route handler with
an email provider), replace the submit handler in
`components/ContactForm.tsx`.
