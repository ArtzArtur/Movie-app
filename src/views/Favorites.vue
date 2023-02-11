<template>
  <div class="grid md:grid-cols-2 max-w-screen-lg mx-auto relative p-2">
    <i 
    @click="$router.go(-1)"
    class="fa fa-arrow-left cursor-pointer transform hover:scale-[1.1] absolute top-4 left-4"></i>
    <div v-for="(favorite,index) in favorites" :key="index" class="mx-auto text-center m-1 flex w-[85%]">
      <div class="bg-slate-100 w-full py-4 px-2 relative">
        <p>
          {{ favorite.Title }}
        </p>
        <p>
          {{ favorite.Year }}
        </p>
        <img :src="favorite.Poster" class="max-w-[150px] mx-auto" alt="movie poster">
        <i class="fa fa-times absolute top-4 right-4 cursor-pointer" @click="remove(index,favorite)"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const favorites = inject('favorites')

const remove = (idx,favorite) => {
  console.log(favorite)
  favorite.isFav=false
  let removeMe = idx
  favorites.splice(removeMe,1)
}
</script>
<style lang="scss" scoped>

</style>