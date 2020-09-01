<template>
    <div>
      <div v-for="(product, index) in cart" :key="index">
        <CartCell :cell-id="index"
                  :productId="product.id"
                  :name="product.name"
                  :price="product.price"
                  :imgSrc="product.imgSrc"
                  :type1="product.type1"
                  :type2="product.type2"
                  :count="product.count"
                  :description="product.description"
        />

      </div>
    </div>
</template>

<script>
import cartStorage from '../scripts/storages/cartStorage'
import CartCell from './CartCell'
export default {
  components: {CartCell},
  cartStorage,
  name: 'CartView',
  data: () => {
    return {
      products: cartStorage.state.products
    }
  },
  computed: {
    cart () {
      return Object.values(cartStorage.state.cart)
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
