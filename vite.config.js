import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    sourcemap: true
  },
  base: '/phaser-avoid-the-germs/'
});
