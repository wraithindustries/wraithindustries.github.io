import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  publicDir: "./public",
  site: "https://wraithindustries.io",
  integrations: [sitemap(), mdx()],
});
