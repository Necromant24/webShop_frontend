import Vue from 'vue'
import Vuex from 'vuex'
// import {containInArr} from '@/scripts/methods/auxiliaryMethods'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carts: {},
    userId: null,
    cartArray: [],
    // viewed products in cart
    products: [],
    cart: {}
  },
  mutations: {

    // protoProduct: productId,count
    // TODO: разобраться что за хрень в addProduct

    addProduct (state, data) {
      state.cart[data.product.id] =
        data.product
    },
    getCartArray (state) {
      let cartkeys = Object.keys(state.carts)
      let cartvalues = Object.values(state.carts)
      let arr = []
      for (let i = 0; i < cartkeys.length; i++) {
        arr.push({productId: cartkeys[i], count: cartvalues[i]})
      }
      return arr
    },
    reloadCartList (state) {
      state.cartArray = this.getCartArray()
    },
    resetCart (state) {
      state.cart = {}
      state.cartArray = []
      state.products = []
    }

  }
})
