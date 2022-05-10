<template>
  <div class="main flex py-20 flex-col items-center justify-center">
    <div class="text-6xl">😕</div>
    <div class="mt-4 text-2xl">УПС</div>
    <div class="text-xs text-gray-400 mt-2">Нет такой страницы</div>
    <button @click="$router.push('/')" class="mt-10 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"><i class="bx bx-arrow-back mr-2"></i> Назад</button>
  </div>
</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>

</style>