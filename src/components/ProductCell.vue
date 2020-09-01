<template>
  <div>
    <div>
      <img src="imgSrc"/>
      <div>
        <div>
          Name: {{name}}
        </div>
        <div>
          Price: {{price}}
        </div>
        <button @click="showView">show all information</button>
        <div>
          <table>
            <tr>
              <td>
                <input type="number" v-model="buycount" />
              </td>
              <td>
                <button @click="addToCart()">add to my cart</button>
              </td>
            </tr>
          </table>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
import cartStorage from '../scripts/storages/cartStorage'
import viewProductStorage from '../scripts/storages/viewProductStorage'

export default {
  cartStorage,
  name: 'ProductCell',
  props: [ 'cell-id', 'productId', 'name', 'price', 'imgSrc', 'type1', 'type2', 'count', 'description' ],
  data () {
    return {
      buycount: 0
    }
  },
  methods: {
    showView () {
      let product =
        {
          id: this.productId,
          name: this.name,
          price: this.price,
          imgSrc: this.imgSrc,
          type1: this.type1,
          type2: this.type2,
          count: this.count,
          description: this.description
        }
      console.log('showing view', product)
      viewProductStorage.commit('setProduct', product)
    },
    addToCart () {
      // this.$emit('add-to-cart', {productId: id, productCount: this.productCount})
      cartStorage.commit('addProduct', {
        product: {
          id: this.productId,
          name: this.name,
          price: this.price,
          imgSrc: this.imgSrc,
          type1: this.type1,
          type2: this.type2,
          description: this.description,
          count: this.buycount
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
