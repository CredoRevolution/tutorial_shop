<template>
  <div class="v-catalog-item">
    <img
      :src="require('../assets/imgs/' + product_data.image)"
      alt="img"
      class="v-catalog-item__img"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price">price : {{ product_data.price }}</p>
    <button class="v-catalog-item__btn btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: 'v-catalog-item',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    },
  },
}
</script>

<style lang="scss">
.v-catalog-item {
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 20px;
  width: 20%;
  .v-catalog-item__img {
    width: 100%;
  }
}
</style>
