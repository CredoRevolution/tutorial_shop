<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="v-catalog__link-to-cart">Back to catalog</div>
    </router-link>
    <div class="v-cart__title">Cart</div>
    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @removeFromCart="removeFromCart(index)"
    />
  </div>
</template>

<script>
import vCartItem from './v-cart-item.vue'
import { mapActions } from 'vuex'
export default {
  name: 'v-cart',
  components: {
    vCartItem: vCartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      },
    },
  },
  methods: {
    ...mapActions(['REMOVE_FROM_CART']),
    removeFromCart(index) {
      this.REMOVE_FROM_CART(index)
    },
  },
}
</script>

<style lang="scss">
.v-cart {
  width: 100%;
  &__title {
    font-size: 24px;
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
  }
}
</style>
