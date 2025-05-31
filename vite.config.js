import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 This makes Vite accessible over your local network
    port: 5173  // Optional: set a fixed port if you want
  }
})
