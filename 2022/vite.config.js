import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/2025/", // Configurado para funcionar em dominio.com/2025/
  plugins: [react()],
  build: {
    outDir: '../2025', // aqui você define a pasta de saída
    emptyOutDir: true,   // limpa a pasta antes de cada build
  },
})
