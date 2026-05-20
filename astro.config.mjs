// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// @ts-ignore
import htmx from 'astro-htmx';

// https://astro.build/config
export default defineConfig({
  site: 'https://dchecketts.github.io',
  base: '/dchecketts.github.io',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), htmx()]
});