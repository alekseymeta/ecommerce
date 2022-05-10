<template>
  <div class="home">
    <div class="max-w-2xl mx-auto mt-10 lg:max-w-7xl relative">
      <TheSpeaner class="z-20" v-if="products.length === 0"/>
      <div v-else class="flex gap-4 items-center grid grid-cols-1 sm:grid-cols-2">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
        <TheSortSelector class="flex sm:justify-end"/>
      </div>
      <TheCard :products="products"/>
    </div>
  </div>
</template>

<script>
import TheCard from "@/components/TheCard";
import TheSortSelector from "@/components/TheSortSelector";
import TheSpeaner from "@/components/TheSpeaner";
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    TheCard, TheSortSelector, TheSpeaner
  },
  mounted() {
    this.$store.dispatch('getItems')
  },
  computed: {
    ...mapGetters({
      products: "products"
    })
  }
}
</script>
