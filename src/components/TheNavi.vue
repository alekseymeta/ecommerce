<template>
  <nav id="nav">
    <div class="flex justify-between items-center">
      <div @click="$router.push('/')" class="flex items-center gap-4 cursor-pointer">
        <div class="text-4xl text-gray-600">
          <img class="w-10" src="~@/assets/sneaker.png" alt="">
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-lg">SNEAKERS</span>
          <span class="text-gray-400 text-xs font-light">Awesome sneakers shop</span>
        </div>
      </div>
      <div class="flex gap-5 icon">
        <router-link to="/favorites" class="nav-items relative">
          <div v-if="likes.length" class="absolute text-xs top-0 left-4 text-white bg-red-500 opacity-90 rounded-full py-1 px-2.5">{{ likes.length }}</div>
          <i class='bx bx-heart'></i>
        </router-link>
        <div class="nav-items relative"
             @click.prevent="openCard">
          <div v-if="cart.length"
               class="absolute text-xs top-0 left-4 cursor-pointer text-white bg-red-500 opacity-90 rounded-full py-1 px-2.5">{{ cart.length }}</div>
          <a href="#" class='bx bx-cart-alt'></a>
        </div>
      </div>
    </div>
    <hr class="mt-4 mb-4">
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheNavi",
  computed: {
    ...mapGetters({
      cart: 'cart',
      likes: 'likes'
    })
  },
  methods: {
    openCard() {
      this.$store.commit('SET_OPENSIDEMENU', true)
    }
  }

}
</script>

<style scoped>
.icon {
  font-size: 25px;
}

.nav-items:hover {
  opacity: .5;
}
</style>