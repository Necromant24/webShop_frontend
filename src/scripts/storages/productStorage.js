import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// не нужно кэшировать, буду дергать апи

export default new Vuex.Store({
  state: {
    count: 0,
    type1: '',
    type2: ''

  },
  mutations: {
    saveSearchFields (state, data) {
      state.type1 = data.type1
      state.type2 = data.type2
    }
  }
})
