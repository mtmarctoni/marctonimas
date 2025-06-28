// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import svgLoader from "vite-svg-loader";
import path from 'path';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), svgLoader()],
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    }
  },
  integrations: [vue()],
});
