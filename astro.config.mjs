// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// @ts-ignore
import htmx from 'astro-htmx';

import remarkWrapCode from './src/lib/remarkWrapCode.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://dchecketts.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  integrations: [
    mdx({
      shikiConfig: {
        theme: 'github-dark',
        wrap: true
      },
      remarkPlugins: [remarkWrapCode]
    }),
    htmx()
  ]
});