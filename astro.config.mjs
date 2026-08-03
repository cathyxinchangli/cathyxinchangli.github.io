import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://cathyxinchangli.github.io",
  output: "static",
  integrations: [sitemap()],
});
