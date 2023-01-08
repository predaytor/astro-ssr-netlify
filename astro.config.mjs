import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  experimental: {
    prerender: true,
  },
  output: "server",
  adapter: netlify(),
});
