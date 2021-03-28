import { createRouter, createWebHistory } from 'vue-router'

const index = () => import('@/views/index/index.vue') // 首页
const editor = () => import('@/views/editor/editor.vue') // 编辑

const routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/editor',
    component: editor
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由前置钩子
// router.beforeEach((to, from) => {
//   console.log(to)
// })

export default router
