import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    works: '',
    show: ''
  },
  mutations: {
    setWorks(state, value) {
      state.works = value;
    },
    setShow(state, value) {
      state.show = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
