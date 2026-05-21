// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

// @ts-ignore
import htmx from 'astro-htmx';

import rehypeWrapCode from './src/lib/rehypeWrapCode.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://dchecketts.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  },

  // Configure markdown / shiki highlighting
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  integrations: [
    mdx({
      // Ensure Shiki highlighting is enabled and use the plugin to wrap code blocks
      shikiConfig: { theme: 'github-dark', wrap: true },
      rehypePlugins: [rehypeWrapCode]
    }),
    htmx()
  ]
});