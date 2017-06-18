import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    currentUser: '',

    tabs: [],
    activeTab: '主页'
  },
  mutations: {
    addTab (state, tab) {
      if (state.tabs.indexOf(tab) < 0) {
        state.tabs.push(tab);
      }
      state.activeTab = tab;
    },
    removeTab (state, tab) {
        let index = state.tabs.indexOf(tab);
        state.tabs.splice(index, 1);
    },

    login (state, info) {
      state.isLogin = true;
      state.currentUser = info.user;
    },
    logout (state) {
      state.isLogin = false;
      state.currentUser = '';
    }
  },
  actions: {
      addTab ({ commit }, tab) {
          commit('addTab', tab)
      }, 
      removeTab ({ commit }, tab) {
          commit('removeTab', tab)
      },

      login ({ commit }, info) {
        commit('login', info)
      },
      logout ({ commit }) {
        commit('logout')
      }
  }
})