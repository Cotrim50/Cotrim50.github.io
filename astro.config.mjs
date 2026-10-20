import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User page repository (Cotrim50.github.io): served from the domain root, so no `base`.
export default defineConfig({
  site: 'https://cotrim50.github.io',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
