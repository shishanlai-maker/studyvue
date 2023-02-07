// 1.导入vue 、 路由模块 和 登录组件模块
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import HomePage from '@/components/HomePage'
import firstpage from '@/home/first'
import developPage from '@/peopleList/developPage'
import testPage from '@/peopleList/testPage'
import productPage from '@/peopleList/productPage'
import parPage from '@/workList/parPage'
import businessPage from '@/workList/businessPage'
// 2.全局注册路由
Vue.use(Router)

// 3.配置路由规则
const router = new Router({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/HomePage',
      component: HomePage,
      children: [
        {
          path: '/home/first',
          component: firstpage
        },
        {
          path: '/peopleList/developPage',
          component: developPage
        },
        {
          path: '/peopleList/testPage',
          component: testPage
        },
        {
          path: '/peopleList/productPage',
          component: productPage
        },
        {
          path: '/workList/businessPage',
          component: businessPage
        },
        {
          path: '/workList/parPage',
          component: parPage
        },
      ]
    },
  ]
})

// 4.导出路由对象
export default router
