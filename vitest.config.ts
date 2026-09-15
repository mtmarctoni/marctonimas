import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "node",
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,astro}"],
      exclude: ["src/**/*.d.ts", "src/**/*.config.*"],
    },
  },
});
