<template>
  <div>
    <div class="fa whitespace-nowrap h-[50px] grid grid-cols-4 items-center justify-center cursor-pointer" :class="[!movie.isFav ? ['text-green-500','fa-plus'] : ['text-red-500','fa-minus']]"
    @click="movie.isFav = !movie.isFav">
    <p>{{!movie.isFav ? 'Add to favorites' : 'Remove from favorites'}}</p>
    <i class="cursor-pointer"></i>
  </div>
  </div>
</template>

<script setup>
const props = defineProps({
  movie:Object
})

</script>

<style lang="scss" scoped>

</style>