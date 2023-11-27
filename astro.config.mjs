import { defineConfig } from 'astro/config';
import qwikdev from "@qwikdev/astro";
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [qwikdev(), tailwind(), mdx()]
});