import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

//disable eslint for this page
// eslint-disable

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      //increase quantity of product if it already exists in cart

      if (state.cart.length) {
        let isProductExists = false
        state.cart.map((cartItem) => {
          if (cartItem.article === product.article) {
            isProductExists = true
            cartItem.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET',
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product)
    },
    REMOVE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    },
  },
})

export default store
