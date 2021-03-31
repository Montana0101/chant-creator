import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "@/style/variable.scss";@import "@/style/mixin.scss";'
      }
    }
  },
  plugins: [vue()]
})
