import { defineConfig } from 'vite';
import { resolve, relative, extname, dirname } from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: 'src',

  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync('src/**/*.html')
          .map((file) => [
            relative('src', file).slice(0, -extname(file).length),
            resolve(__dirname, file),
          ])
      ),
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});
