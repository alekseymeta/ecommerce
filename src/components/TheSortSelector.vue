<template>
  <div class="flex gap-4 text-xs cursor-pointer">
    <div class="sortBnt hover:opacity-50" @click="$store.dispatch('sortProducts', 'brand')">По имени</div>
    <div class="sortBnt hover:opacity-50" @click="$store.dispatch('sortProducts', 'price')">По цене</div>
  </div>
</template>

<script>

export default {
  name: "TheSortSelector"
}
</script>

<style scoped>
.sortBnt {
  border-bottom: 1px #bebebe dotted;
}
</style>