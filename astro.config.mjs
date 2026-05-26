import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

export default defineConfig({
  integrations: [svelte()],
  site: 'https://Alien0Dev.github.io',
  // Usamos un operador ternario para que solo aplique el base en producción
  base: process.env.NODE_ENV === 'production' ? '/AgenciaMV' : '/'
});
