import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Ruta del repositorio en GitHub Pages (cambia si usas otro nombre).
  base: '/levelup-store-react/',
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    include: ['src/**/*.test.{js,jsx}'],
    exclude: [
      'src/**/*.node.test.{js,jsx}',
      'src/**/*.browser.test.{js,jsx}',
      '**/node_modules/**'
    ],
    clearMocks: true
  }
});
