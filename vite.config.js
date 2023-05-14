import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: true, // enable CSS modules
  },
  mode: 'production', // set Vite mode to production
})