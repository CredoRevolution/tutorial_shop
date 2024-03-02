<template>
  <div class="v-cart-item">
    <img :src="require('../assets/imgs/' + cart_item_data.image)" alt="" />
    <div class="v-cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
      <div class="v-cart-item-info__qnty">
        <p>Quantity:{{ cart_item_data.quantity }}</p>
      </div>
      <button @click="removeFromCart">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-cart-item',
  data() {
    return {}
  },
  methods: {
    removeFromCart() {
      this.$emit('removeFromCart')
    },
  },
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  },
}
</script>

<style lang="scss">
.v-cart-item {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  img {
    width: 50px;
  }
  &__info {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
}
</style>
