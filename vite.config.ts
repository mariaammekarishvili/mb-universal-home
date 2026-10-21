import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GoDaddy Node.js Hosting assigns the port through PORT and reaches the app from
// outside the container under the site's own domain. Locally PORT is unset and
// Vite keeps its defaults.
const hostedPort = Number(process.env.PORT) || undefined
const hosted = hostedPort
  ? { port: hostedPort, strictPort: true, host: '0.0.0.0', allowedHosts: true as const }
  : {}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: hosted,
  preview: hosted,
})
