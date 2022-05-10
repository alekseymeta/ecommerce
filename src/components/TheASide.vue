<template>
  <div class="relative z-20" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-500"
         :class="!openSideMenu ? 'opacity-0 invisible' : 'opacity-100'"></div>
    <div class="inset-0 overflow-hidden"
         :class="openSideMenu ? 'fixed' : ''">
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <div class="pointer-events-auto relative w-screen max-w-md transform transition ease duration-500 sm:duration-700"
          :class="!openSideMenu ? 'translate-x-full' : 'translate-x-0'">
            <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4 ease-in-out duration-500"
                 :class="!openSideMenu ? 'opacity-0' : 'opacity-100'">
              <button @click="closeMenu" type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                <span class="sr-only">Close panel</span>
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
              <div class="px-4 sm:px-6 flex justify-between items-center">
                <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Корзина</h2>
                <div @click="$store.commit('DEL_ALL_CART')"
                     v-if="cart.length"
                     class="text-xs hover:opacity-50 cursor-pointer" >Очистить</div>
              </div>
              <div class="relative mt-6 flex-1 px-4 sm:px-6">

                <div class="absolute inset-0 px-4 sm:px-6">
                  <div v-if="!cart.length" class="flex flex-col items-center justify-center min-h-full">
                    <div class="text-6xl">🛒</div>
                    <div class="text-2xl mt-5">Корзина пуста</div>
                    <div class="text-xs text-gray-400">Добавьте хотя бы одну пару</div>
                    <button @click="closeMenu" class="mt-10 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><i class="bx bx-arrow-back mr-2"></i> Назад</button>
                  </div>
                  <div v-else>
                    <div class="flex justify-between gap-4 p-2 bg-gray-100 mt-4 rounded" v-for="item in cart" :key="item.id">
                      <img class="w-20" :src="item.imageSrc" alt="">
                      <div>
                        <div class="mb-1">{{ item.brand }}</div>
                        <div class="text-sm">{{ item.name }}</div>
                        <div class="text-xs">{{ item.color }}</div>
                        <div class="mt-2">${{ item.price }}</div>
                      </div>
                      <div @click="$store.dispatch('delToCart', item.id)">
                        <a href="#" class="bx bx-x text-gray-400 text-2xl"></a>
                      </div>
                    </div>
                      <div class="fixed bottom-4 bg-gray-50 rounded p-4 right-4 left-4">
                        <div class="flex justify-between items-center">
                          <div class="flex flex-col">
                            <div class="text-xs text-gray-400">
                              Всего товаров: {{ cart.length }}
                            </div>
                            <div>
                              Итого: ${{ cart.map(a => Number(a.price)).reduce((acc, b) => acc + b) }}
                            </div>
                          </div>
                          <button class="bg-indigo-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Оформить</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheASide",
  methods: {
    closeMenu() {
      this.$store.commit('SET_OPENSIDEMENU', false )
    }
  },
  computed: {
    ...mapGetters({
      openSideMenu: 'openSideMenu',
      cart: 'cart'
    }),
    openS(){
      return this.openSideMenu
    }
  },
  watch: {
    openS(nv) {
      nv ? document.querySelector('body').classList.add('noScroll') :  document.querySelector('body').classList.remove('noScroll')
    }
  }
}
</script>

<style scoped>

</style>