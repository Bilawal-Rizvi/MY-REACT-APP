
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    open: true, // 👈 this line makes it auto-open in your default browser
  },
    build: {
    outDir: "dist"
  }
})