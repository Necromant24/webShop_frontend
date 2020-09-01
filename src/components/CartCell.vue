<template>
    <div>
      <img src="imgSrc"/>
      <div>
        <div>
          Name: {{name}}
        </div>
        <div>
          Price: {{price}}
        </div>
        <button @click="emit('show-view', id)">show all information</button>
        <div>
          <table>
            <tr>
              <td>
                <input type="number" v-model="buycount" />
              </td>
              <td>
                <button @click="removeFromCart(productId)">remove from cart</button>
              </td>
            </tr>
          </table>

        </div>

      </div>
    </div>
</template>

<script>
export default {
  name: 'CartCell',
  props: [ 'cell-id', 'productId', 'name', 'price',
    'imgSrc', 'type1', 'type2', 'count', 'description' ],
  created () {
    this.buycount = this.count
  },
  data: () => {
    return {
      buycount: 0
    }
  },
  methods: {
    removeFromCart () {

    }
  }
}
</script>

<style scoped>

</style>
