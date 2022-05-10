import { createStore } from 'vuex'
import {getDataApi} from "@/store/getDataApi";
import {cart} from "@/store/cart";
import {global} from "@/store/global";

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    getDataApi, cart, global
  }
})
