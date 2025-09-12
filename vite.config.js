import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Netlify serves your app from root
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})
