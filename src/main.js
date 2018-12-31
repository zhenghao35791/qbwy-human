import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'
import ElementUI from 'element-ui'
import moment from 'vue-moment'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全局scss
import './css/app.scss'
Vue.use(ElementUI)
// ElementUI必须在axios之前  因为axios插件中用到了
Vue.use(axios, store, errMsg => {
  Vue.prototype.$notify({
    title: '错误',
    message: errMsg,
    type: 'error'
  })
})
Vue.use(moment)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
