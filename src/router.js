import Vue from 'vue'
import Router from 'vue-router'
import views from '@/views'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/human-info',
      name: 'index',
      component: views.HumanInfo
    },
    {
      path: '/human-info',
      name: 'humanInfo',
      component: views.HumanInfo
    },
    {
      path: '/miss-omc-detail/:dataType/:time/:region/:isOffLine',
      name: 'missOmcDetail',
      component: views.HumanInfo
    },
    {
      path: '/page404',
      name: 'page404',
      component: views.Page404
    },
    {
      path: '*',
      redirect: '/page404'
    }
  ]
})
