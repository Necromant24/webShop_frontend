<template>
    <div>
      <div class="flex">
        <div v-for="(tab,index) in tabs" :key="index">
          <button @click="changeTab(tab)">{{tab.name}}</button>
        </div>
      </div>

      <div>
        <div v-if="state === 0">
          <ProductsView/>
        </div>
        <div v-if="state===1">
          <CartView />
        </div>
        <div v-if="state===3">
          <ProductView />
        </div>
        <div v-if="state===4">
          some
        </div>

      </div>
    </div>
</template>

<script>
import ProductsView from '@/components/ProductsView'
import CartView from './CartView'
import ProductView from './ProductView'
export default {
  name: 'MainContainer',
  components: {ProductView, CartView, ProductsView},
  data () {
    return {
      tabs: [{name: 'products', index: 0}, {name: 'cart', index: 1},
        {name: 'product view', index: 2}, {name: 'some', index: 3}],
      state: 0
    }
  },
  methods: {
    changeTab (tab) {
      this.state = tab.index
    }
  }
}
</script>

<style scoped>

  .flex{
    display: flex;
  }

</style>
