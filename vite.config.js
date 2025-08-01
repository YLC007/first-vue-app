// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/first-vue-app/'  // 👈 你的仓库名作为 base 路径
})
