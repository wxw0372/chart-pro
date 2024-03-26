import { fileURLToPath, URL } from 'node:url'
// import postCssPxToRem from 'postcss-pxtorem'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  //   css: {
  //     postcss: {
  //       plugins: [
  //         postCssPxToRem({
  //           rootValue: 192, // （设计稿/10）1rem的大小
  //           propList: ['*'] // 所有px 转 rem
  //         })
  //       ]
  //     }
  //   }
})
