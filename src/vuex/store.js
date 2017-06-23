import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    currentUser: '',
    court: '1',

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
      if (state.tabs.length == 0) {
        state.activeTab = '主页'
      } else {
        state.activeTab = state.tabs[state.tabs.length-1]
      }
    },
    changeCourt (state, court) {
      state.court = court;
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
      login ({ commit }, info) {
        commit('login', info)
      },
      logout ({ commit }) {
        commit('logout')
      }
  }
})