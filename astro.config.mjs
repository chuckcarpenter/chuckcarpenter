import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: confirm Chuck's real domain — used for canonical links, sitemap, and RSS.
export default defineConfig({
  site: 'https://chuckcarpenter.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap(),
  ],
});
