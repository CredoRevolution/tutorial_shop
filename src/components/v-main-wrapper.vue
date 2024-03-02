<template>
  <div class="v-main-wrapper">
    <KeepAlive>
      <router-view>
        <!-- <vCatalog />
      <vCart v-if="CART.length" v-bind:cart_data="CART" /> -->
      </router-view>
    </KeepAlive>
  </div>
</template>

<script>
// import vCatalog from './v-catalog.vue'
// import vCart from './v-cart.vue'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['CART']),
  },
  name: 'v-main-wrapper',
  data() {
    return {}
  },
  components: {
    // vCatalog: vCatalog,
    // vCart: vCart,
  },
}
</script>

<style lang="scss">
.v-main-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
}
</style>
