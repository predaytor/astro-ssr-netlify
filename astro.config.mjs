import { defineConfig } from "astro/config";
import { netlifyFunctions } from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  experimental: {
    prerender: true,
  },
  output: "server",
  adapter: netlifyFunctions(),
});
