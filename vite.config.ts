import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from "@crxjs/vite-plugin";
const manifest  = require('./manifest.json')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),crx({manifest})]
})
