# ARFA

Site for **ARFA** — an independent research publication on markets, portfolio
construction and the structure of long-term capital.

> Independent research on markets and portfolio structure.

## Scope (read before adding pages)

This site is deliberately limited to publishing general research and commentary.
It must not describe, offer or imply any regulated investment service —
investment advice, personal recommendations, portfolio reviews, second opinions
on proposals or instruments, portfolio management, or client onboarding. Those
activities require authorisation (CySEC / MiFID II) and were removed from this
site for that reason.

Practical rules when editing content:

- No services, engagement, pricing, client-intake or "book a call" pages.
- No client-targeting copy ("who we work with", "our clients", enquiry forms).
- Contact stays editorial: correspondence about published material and an
  email-only distribution list. Never collect a reader's circumstances,
  holdings or objectives — that is intake, and intake is the regulated part.
- No buy/sell/hold views on specific securities or issuers (market abuse rules).
- Keep all commentary general — never tailored to an individual reader.
- The disclaimer in `components/Footer.tsx` and the notice at `/legal` must stay
  consistent with what the rest of the site actually says.

## Stack

- [Next.js 15](https://nextjs.org) (App Router, React 19)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- `next/font` (Newsreader + Inter)
- Optimised for deployment on [Vercel](https://vercel.com)

## Pages

| Route       | Page                                     |
| ----------- | ---------------------------------------- |
| `/`         | Home                                     |
| `/about`    | About (purpose, philosophy, standards)   |
| `/insights` | Insights (general research notes)        |
| `/contact`  | Contact (correspondence + subscribe)     |
| `/legal`    | Notice (scope, disclaimer, terms)        |

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

### Correspondence and the distribution list

There is no enquiry intake by design — a form asking about a reader's situation
reads as client solicitation. `/contact` offers an editorial mailbox
(`lib/site.ts → site.email`) and `components/SubscribeForm.tsx`, which collects
an email address and nothing else.

Both currently use a `mailto:` fallback with a confirmation state. To wire the
subscribe form to a real backend (Resend, Buttondown, a Next.js route handler),
replace the submit handler in `components/SubscribeForm.tsx` — and keep the form
to a single email field.
