import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
// 引入页面组件 start
// 不再在此加载路由映射的组件, 而是使用懒加载的方式，当需要组件资源时再加载
// import Brazil from '@/views/Brazil.vue'
// import Hawaii from '@/views/Hawaii.vue'
// import Jamaica from '@/views/Jamaica.vue'
// import Panama from '@/views/Panama.vue'
// import About from '@/views/About.vue'
// 引入页面组件 end

// 路由映射
const routes = [
  {
    path: '/',
    // 因为你是首页，懒加载没你份
    component: Home
  },
  {
    path: '/brazil',
    // 当路由首次被访问时，载入对应的组件
    component: () => import('@/views/Brazil.vue')
  },
  {
    path: '/panama',
    component: () => import('@/views/Panama.vue')
  },
  {
    path: '/Hawaii',
    component: () => import('@/views/Hawaii.vue')
  },
  {
    path: '/jamaica',
    component: () => import('@/views/Jamaica.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  }
]

// 创建path和组件映射的路由, 并以命名方式(named export)导出
export const router = createRouter({
  // 使用浏览器历史功能, 使用HTML5历史模式
  history: createWebHistory(),
  routes
})
