import { setToken } from '@/utils/auth'

const state = {
  httpCount: 0,
  url: ''
}

// getters
const getters = {
  isLoading: state => {
    return state.httpCount > 0
  }
}

// actions
const actions = {
  SetConfig ({ commit }, url) {
    commit('SET_CONFIG', url)
  }
}

// mutations
const mutations = {
  showLoading () {
    state.httpCount += 1
  },
  hideLoading () {
    state.httpCount -= 1
  },
  SET_CONFIG: (state, url) => {
    state.url = url
    setToken(url)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
