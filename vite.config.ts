import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import the plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Add it here
  ],
  server: {
    proxy: {
      "/radio-api": {
        target: "https://stations.radioss.app",
        changeOrigin: true,
        secure: true,
        headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "application/json",
      },
        rewrite: (path) =>
          path.replace(/^\/radio-api/, ""),
      },
    },
  },
})
