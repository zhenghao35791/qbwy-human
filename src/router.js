import Vue from 'vue'
import Router from 'vue-router'
import views from '@/views'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/integrity/inte-resource',
      component: views.Overview,
      children: [
        {
          path: '/integrity/inte-resource',
          name: 'inteResource',
          component: views.InteResource
        }
      ]
    },
    {
      path: '/miss-omc-detail/:dataType/:time/:region/:isOffLine',
      name: 'missOmcDetail',
      component: views.MissOmcDetail
    },
    {
      path: '/miss-net-detail/:dataType/:time/:region/:isOffLine',
      name: 'missNetDetail',
      component: views.MissNetDetail
    },
    {
      path: '/dm',
      name: 'dmFrame',
      component: views.Frame
    }
  ]
})
