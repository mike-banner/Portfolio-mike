// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Remplacer par ton domaine personnalisé
  site: 'https://portfolio-mike.pages.dev',

  integrations: [sitemap()],
  output: "hybrid",
  adapter: cloudflare()
});