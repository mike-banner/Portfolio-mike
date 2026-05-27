// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio-mike.pages.dev', // Remplacer par ton domaine personnalisé
  integrations: [sitemap()]
});