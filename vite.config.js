import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.dev
export default defineConfig({
  plugins: [react()],
  base: '/Astronomy/', 
  build: {
    outDir: 'dist' 
  }
})
