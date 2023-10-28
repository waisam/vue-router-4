import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

// 路由映射
const routes = [
  {
    path: '/',
    // 因为你是首页，懒加载没你份
    component: Home
  },
  {
    // 使用`:name`作为路径参数，动态匹配`/destination/*`
    path: '/destination/:name',
    // 为路由命令。 例如,与组件名一致, route-link可直接将to指定为路由名称，而不需要匹配path。
    // 因此, 可以随心所欲指定想在浏览器地址栏展示的地址
    name: 'DestinationShow',
    // props设置为 true, 表示将这个$route.params传递给组件的props
    props: true,
    // 当路由首次被访问时，载入对应的组件
    component: () => import('@/views/DestinationShow.vue')
  },
  {
    path: '/experience/:dest/:slug',
    name: 'ExperienceShow',
    // ...是JavaScript的扩展语法, 效果是将紧随的参数自动展开成函数的参数列表
    // 以下操作将路由的参数对象展开构造成另外一个对象返回给props
    props: route => ({ ...route.params }),
    component: () => import('@/views/ExperienceShow.vue')
  }
]

// 创建path和组件映射的路由, 并以命名方式(named export)导出
export const router = createRouter({
  // 使用浏览器历史功能, 使用HTML5历史模式
  history: createWebHistory(),
  // 为当前页面的导航链接自定义样式
  linkActiveClass: 'active',
  routes
})
