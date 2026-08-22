# Digital Nomad Indonesia — Website (Next.js)

Company profile for Digital Nomad Indonesia (visa, legal & travel services in Bali),
rebuilt from WordPress as a fully static, multilingual Next.js app deployed on Vercel.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **next-intl** — 5 languages (`en`, `tr`, `pt`, `hi`, `zh`), English un-prefixed
- **react-markdown** — blog article rendering
- Fully static (SSG) — fast, cheap, no server/database

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project structure

```
app/[locale]/            Localized pages (home, services, blog, about, contact, faq, privacy)
app/[locale]/[slug]/     Service detail pages (data-driven from lib/services.ts)
app/api/contact/         Contact form handler (email via Resend)
components/              Header, Footer, PageHero, CtaBand, ContactForm, FaqAccordion, ...
content/blog/            Blog article bodies (markdown, migrated from WordPress)
lib/                     Site config, services data, blog index
messages/                i18n strings per locale (en is the source; others auto-translated)
public/images/           Migrated media (malware-free)
```

## Editing content

- **Pages / UI text:** `messages/en.json` (then re-run translations for other locales).
- **Services:** `lib/services.ts`.
- **Blog:** add metadata in `lib/blog.ts` and a markdown file in `content/blog/<slug>.md`.

## Contact form

The form posts to `/api/contact`, which emails via [Resend](https://resend.com) when
`RESEND_API_KEY` is set (see `.env.example`). Without a key it logs and succeeds so the
form is testable locally.

## Deploy to Vercel

1. Push this folder to a Git repo (GitHub/GitLab).
2. Import it in Vercel — framework auto-detected as Next.js, no config needed.
3. Add the env vars from `.env.example` in Vercel → Project → Settings → Environment Variables.
4. Point the `digitalnomadindonesia.org` domain to the Vercel project.

Or from the CLI:

```bash
npx vercel          # preview deployment
npx vercel --prod   # production deployment
```

## Notes

- Legacy WordPress URLs are preserved; old blog-post URLs (`/<slug>`) 301-redirect to `/blogs/<slug>`.
- The `en` locale is the translation source. `tr`, `pt`, `hi`, `zh` are machine-translated
  and can be refined by editing `messages/<locale>.json`.
- Service-detail and blog article bodies are currently English across all locales (legal/
  immigration content is best human-reviewed before translating).
