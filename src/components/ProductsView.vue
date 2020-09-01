<template>
    <div>
      <div>

      </div>
      <input v-model="type1">
      <input v-model="type2">
      <button @click="search">search</button>

      <div v-if="notEmpty" class="weekGrid">
        <div v-for="(product, index) in products" :key="index">
          <div>
            <ProductCell v-bind:cell-id='index'
                         :product-id="product.id"
                         :img-src='product.imgSrc'
                         :price="product.price"
                         :name="product.name"
                         :type1="product.type1"
                         :type2="product.type2"
                         :description="product.description">
            </ProductCell>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
import ProductCell from './ProductCell'
import productStorage from '../scripts/storages/productStorage'
import viewProductStorage from '../scripts/storages/viewProductStorage'

export default {
  name: 'ProductsView',
  viewProductStorage,
  productStorage,
  components: {ProductCell},
  data: function () {
    return {
      notEmpty: false,
      type1: productStorage.state.type1,
      type2: productStorage.state.type2,
      products: []

    }
  },
  methods: {
    search () {
      let url = new URL('http://localhost:5000/product')
      let params = {type1: this.type1}
      url.search = new URLSearchParams(params).toString()

      fetch(url)
        .then(data => data.json())
        .then((json) => {
          console.log(json)
          this.products = json
          this.notEmpty = true
        }).catch((err) => {
          console.log('err - ', err)
        })

      productStorage.commit('saveSearchFields', {type1: this.type1, type2: this.type2})
    }
  }
}
</script>

<style scoped>

  .weekGrid{
    display: grid;
    grid-template-columns: repeat(4,1fr) ;
  }

</style>
