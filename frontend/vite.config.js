import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  build: {
    outDir: 'dist' // important pentru Vercel să știe unde e outputul
  },
  base: './', // 👈 adaugă această linie pentru a rezolva rutele relative
})
