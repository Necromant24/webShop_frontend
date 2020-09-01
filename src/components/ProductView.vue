<template>
    <div>
      <div v-if="some">
        <img src="img-src">
        Name: {{product.name}} <br>
        type1: {{product.type1}} <br>
        type2: {{product.type2}} <br>
        price: {{product.price}} <br>
        description: {{product.description}}
      </div>
      <div v-else>
        <h4>
          Nothing to show :(
        </h4>
      </div>

    </div>
</template>

<script>
import viewProductStorage from '../scripts/storages/viewProductStorage'

export default {
  name: 'ProductView',
  viewProductStorage,
  // props: [ 'id', 'name', 'type1', 'type2', 'description', 'price', 'img-src', 'count' ],
  data: () => {
    return {
      some: viewProductStorage.state.some,
      product: viewProductStorage.state.product
    }
  }
}
</script>

<style scoped>

</style>
