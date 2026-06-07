// @ts-check

import path from "node:path";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import svgLoader from "vite-svg-loader";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss(), svgLoader()],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
  },
  integrations: [vue()],
});
