import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // indicates that smthng is assigned to var product
    some: false,
    product: {}
  },
  mutations: {
    setProduct (state, product) {
      console.log('setting product view ......')
      state.product = product
      state.some = true
    },
    remove (state) {
      state.product = {}
      state.some = false
    }
  }
})
