/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    react({
      include: "**/*.tsx",
    }),
    TanStackRouterVite(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
});
