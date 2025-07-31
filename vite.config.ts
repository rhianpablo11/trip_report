import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'; 

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),
            react(),
          VitePWA({
              registerType: 'autoUpdate', // Atualiza o service worker automaticamente
              workbox: {
                // Define quais arquivos devem ser cacheados para o modo offline
                globPatterns: ['**/*.{js,ts,tsx,css,html,ico,png,svg,json,ttf}'] 
              },
              // Esta é a configuração do seu manifest.json
              manifest: {
                name: 'Tripply',
                short_name: 'Tripply',
                description: 'O seu gerador de relatorios da lista de viagem',
                theme_color: '#ffffff', // Cor do tema
                background_color: '#efefeb', // Cor de fundo
                display: 'standalone',
                scope: '/',
                start_url: '/',
                icons: [
                  {
                    src: 'icon.png', // Caminho relativo à pasta `public`
                    sizes: '192x192',
                    type: 'image/png',
                  },
                  {
                    src: 'icon.png', // Caminho relativo à pasta `public`
                    sizes: '512x512',
                    type: 'image/png',
                  },
                  {
                    src: 'icon.png', // Ícone "maskable"
                    sizes: '512x512',
                    type: 'image/png',
                    purpose: 'any maskable',
                  }
                ],
              },
            })],
})
