<template>
  <TheASide/>
  <div class="wrapper rounded bg-white m-5 md:m-20 p-10 relative">
    <TheNavi/>
    <router-view/>
  </div>
</template>

<script>
import TheNavi from "@/components/TheNavi";
import TheASide from "@/components/TheASide";

export default {
  components: { TheNavi, TheASide }
}
</script>

<style>
body {
  @apply bg-indigo-100
}
.noScroll {
  height: 100%;
  overflow: hidden;
}

</style>
