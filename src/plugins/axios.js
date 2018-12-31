'use strict'

import axios from 'axios'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let config = {
  baseURL: process.env.VUE_APP_apiUrl || ''
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}
const _axios = axios.create(config)

export default {
  install (Vue, store, errorHandle) {
    if (store) {
      // 设置loading
      _axios.interceptors.request.use(
        function (config) {
          store.commit('system/showLoading')
          return config
        },
        function (error) {
          store.commit('system/hideLoading')
          return Promise.reject(error)
        }
      )

      // Add a response interceptor
      _axios.interceptors.response.use(
        function (response) {
          store.commit('system/hideLoading')
          return response
        },
        function (error) {
          store.commit('system/hideLoading')
          return Promise.reject(error)
        }
      )
    }

    _axios.interceptors.response.use(
      function (response) {
        if (response.status >= 200 && response.status < 300) return response
        let messTemp = (response.data && response.data.errorDescription) || '后台服务异常'
        if (response.status === 419) {
          messTemp = response.data.message
          if (window.parent !== window) {
            window.parent.location.reload()
          } else {
            window.location.reload()
          }
        }
        // eslint-disable-next-line no-console
        errorHandle ? errorHandle(messTemp) : console.error(messTemp)
        return Promise.reject(response)
      },
      function (error) {
        return Promise.reject(error)
      }
    )

    Vue.axios = _axios

    Object.defineProperties(Vue.prototype, {
      $axios: {
        get () {
          return _axios
        }
      }
    })
  }
}
