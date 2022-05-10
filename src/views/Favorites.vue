<template>
<div v-if="likes.length === 0" class="main flex py-20 flex-col items-center justify-center">
  <div class="text-6xl">😔</div>
  <div class="mt-4 text-2xl">Нет избранного</div>
  <div class="text-xs text-gray-400 mt-2">Добавьте что-нибудь</div>
  <button @click="$router.push('/')" class="mt-10 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><i class="bx bx-arrow-back mr-2"></i> Назад</button>
</div>
  <div v-else>
    <h1 class="text-2xl mb-10 mt-10">Избраное:</h1>
    <TheCard :products="likes"/>
  </div>
</template>

<script>
import TheCard from "@/components/TheCard";
import { mapGetters } from "vuex";

export default {
  name: "Favorites",
  components: { TheCard },
  computed: {
    ...mapGetters({
      likes: 'likes'
    })
  }
}
</script>

<style scoped>
.main {
  min-height: 100%;
}
</style>