import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  server: {
    port: 5173,
    proxy: {
      '/api' : {
        target: 'http://localhost:5000',
        changeOrigin: true,
        loglevel: 'debug',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
