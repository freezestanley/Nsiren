import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

import ui from './modules/ui'

Vue.use(Vuex)

const store = new Vuex.Store({
  // actions,
  // getters,
  state: {
  },
  modules: {
    ui
  },

  actions: {
    getStore ({ commit, state }, bool) {
      alert('get store')
      commit(types.LOADIND_STORE)
    },
    setStore ({ commit, state }) {
      alert('set store')
      commit(types.SET_STORE)
    }
  },
  mutations: {
    [types.LOADIND_STORE] (state) {
      if (sessionStorage) {
        let s = JSON.parse(sessionStorage.getItem("key"))
        if (!s) return
        let b = Object.keys(state)
        b.map(function (v, i, arr) {
          state[v] = s[v]
        })
      }
    },
    [types.SET_STORE] (state) {
      if (sessionStorage) {
        sessionStorage.setItem("key", JSON.stringify(state))
      }
    }
  },
  strict: false,
  plugins: []
})

export default store
