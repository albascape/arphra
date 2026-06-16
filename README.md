# ARFA

Marketing site for **ARFA** — a founder-led boutique platform focused on private
capital strategy, portfolio architecture and independent analytical support.

> Independent thinking for private capital.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, React 19)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- `next/font` (Fraunces + Inter)
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

The visual language is deliberately calm and editorial: a warm paper palette, a
single quiet bronze accent, a Fraunces serif for display type and Inter for body
copy, generous whitespace, hairline rules and restrained motion. It is an original
design built in the spirit of a premium boutique — understated, not showy.

### Contact form

The contact form currently uses a `mailto:` fallback and a confirmation state. To
wire it to a real backend (e.g. Resend, Formspree, or a Next.js route handler with
an email provider), replace the submit handler in
`components/ContactForm.tsx`.
