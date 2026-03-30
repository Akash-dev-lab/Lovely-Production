import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Target modern browsers for smaller JS
    minify: 'terser', // Terser provides better compression than esbuild in some cases
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs for production
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },

  }
})

