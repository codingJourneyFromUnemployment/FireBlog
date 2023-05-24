import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'
import { fileURLToPath, URL } from 'node:url';
import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';
import { createRequire } from 'node:module';
const require = createRequire( import.meta.url );

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    svgLoader(),
    ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } )
  ],
  resolve: {
    alias: {
      '@': fileURLToPath( new URL( './src', import.meta.url ) )
    }
  },
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
