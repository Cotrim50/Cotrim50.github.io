# José Cotrim — Portfolio

Static portfolio built with Astro + Tailwind CSS (EN default, PT at `/pt/`).

```bash
npm install
npm run dev     # local dev
npm run build   # static output in dist/
```

- Content: `src/data/profile.ts` (facts, skills, projects) and `src/data/i18n/{en,pt}.ts` (text).
- CV: drop `Jose_Cotrim_CV.pdf` into `public/cv/`.
- Deploy: `.github/workflows/deploy.yml` on push to `main`. In the repo go to **Settings → Pages → Source: GitHub Actions**.
