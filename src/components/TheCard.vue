<template>

  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    <div v-for="product in products" :key="product.id" class="group relative">
      <div v-if="!likes.find(a => (a.id).includes(product.id))">
        <button @click="addToLikes(product.id)" class="absolute bg-gray-200 p-1 px-2 rounded-md">
          <i class="bx bx-heart"></i>
        </button>
      </div>
      <div v-else>
        <button @click="$store.dispatch('delToLikes', product.id)" class="absolute bg-gray-200 p-1 px-2 rounded-md">
          <i class="bx bxs-heart"></i>
        </button>
      </div>
      <div
          class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden lg:h-80 lg:aspect-none">
        <img :src="product.imageSrc" :alt="product.imageAlt"
             class="w-full h-full object-center object-cover lg:w-full lg:h-full"/>
      </div>
      <div class="mt-4 flex justify-between">
        <div class="w-full">
          <h1>
            {{ product.brand }}
          </h1>
          <h3 class="text-sm text-gray-700">
            <span class="absolute"/>
            <span class="prod-name">{{ product.name }}</span>
          </h3>
          <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>

          <div class="flex justify-between items-center mt-4">
            <div v-if="!cart.find(a => (a.id).includes(product.id))">
              <button @click="addToCard(product.id)" class="text-xs bg-indigo-700 text-white py-2 px-3 rounded">
                Добавить в корзину
              </button>
            </div>
            <div v-else>
              <button @click="$store.dispatch('delToCart', product.id)"
                      class="text-xs bg-indigo-700 text-white py-2 px-3 rounded opacity-75">
                <i class="bx bx-check"></i>
                В корзине
              </button>
            </div>
            <p class="font-medium text-gray-900">${{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "TheCard",
  props: {
    products: {
      type: Object
    }
  },
  methods: {
    addToCard(id) {
      const itemForCart = this.products.filter(a => {
        return (a.id).includes(id)
      })

      this.$store.dispatch('addToCart', ...itemForCart)
    },
    addToLikes(id) {
      const itemForCart = this.products.filter(a => {
        return (a.id).includes(id)
      })

      this.$store.dispatch('addToLikes', ...itemForCart)
    }
  },
  computed: {
    ...mapGetters({
      // products: 'products',
      cart: 'cart',
      likes: 'likes'
    })
  }
}
</script>

<style scoped>
.prod-name {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>