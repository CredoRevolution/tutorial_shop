<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <div class="v-catalog__link-to-cart">cart : {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'v-catalog',
  computed: {
    ...mapGetters(['PRODUCTS']),
    ...mapGetters(['CART']),
  },
  components: {
    vCatalogItem: vCatalogItem,
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions(['GET_PRODUCTS_FROM_API', 'ADD_TO_CART']),
    addToCart(data) {
      this.ADD_TO_CART(data)
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  },
}
</script>

<style lang="scss">
h1 {
  margin: 0;
  padding: 0;
}
.v-catalog {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &__list {
    margin-top: 50px;
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;
  }
  &__link-to-cart {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 15px;
    border: 1px solid #aeaeae;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
