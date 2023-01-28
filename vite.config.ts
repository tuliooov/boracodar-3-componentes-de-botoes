import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/botoes-e-cursores-bora-codar',
  server: {
    port: 3000
  }
})
