import { defineConfig } from "astro/config";

import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "u9xd1p40",
      dataset: "production",
      apiVersion: "v2021-10-21",
      useCdn: "true",
    }),
  ],
});
