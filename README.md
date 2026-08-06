# Goral Bhatt — Healthcare Market Intelligence Portfolio

A recruiter-facing healthcare-intelligence fieldbook for Goral Bhatt. The site presents experience in medical-device research, competitive intelligence, tracker design, biosimilar research, and regulated documentation.

## Run locally

```bash
npm install
npm run dev
```

## Verify

```bash
npm test
```

## GitHub Pages

Pushing to `main` runs `.github/workflows/deploy-pages.yml` and publishes the static build to [mehtagoral2530.github.io/personal_portfolio](https://mehtagoral2530.github.io/personal_portfolio/). The workflow sets the project base path before building and deploys `dist/client`.

## Project structure

- `app/page.tsx` — fieldbook content and page structure
- `app/globals.css` — visual system and responsive layout
- `components/SiteHeader.tsx` — responsive navigation
- `lib/site-paths.ts` — base-path-safe public asset links
- `public/` — résumé, hero image, and social-sharing image

The source is configured for OpenAI Sites through `.openai/hosting.json` and GitHub Pages through `.github/workflows/deploy-pages.yml`.
