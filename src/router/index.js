import { createRouter, createWebHistory } from 'vue-router'
import Screen from '../views/screen/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/Screen' // 重定向:重新指向其它path,会改变网址
    },
    {
      path: '/screen',
      name: 'Screen',

      component: Screen
    }
  ]
})

export default router
