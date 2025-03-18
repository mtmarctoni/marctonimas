// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import svgLoader from 'vite-svg-loader';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      svgLoader()
    ],
  },
  integrations: [vue()],
  
});
