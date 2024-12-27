import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: { exclude: ["fsevents"] },
  server: {
    hmr: {
      overlay: false, // Disable HMR overlay to check if it's causing issues
    },
  },
});
