import vue from 'vue'
import vueRouter from 'vue-router'
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'

vue.use(vueRouter)

export default new vueRouter({
  routes: [
    {
      name: 'catalog',
      path: '/',
      component: vCatalog,
    },
    {
      name: 'cart',
      path: '/cart',
      component: vCart,
      props: true,
    },
  ],
})
