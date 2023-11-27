import { svelte } from '@sveltejs/vite-plugin-svelte';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      configFile: '.config/svelte.config.js'
    }),
    react(),
    vanillaExtractPlugin()
  ]
});
