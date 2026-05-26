// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  site: 'https://Alien0Dev.github.io',
  base: 'AgenciaMV'
});
