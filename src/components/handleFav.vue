<template>
  <div v-if="!movie.isFav" class="grid bg-slate-100 shadow-sm place-content-center p-1 cursor-pointer hover:bg-slate-50 max-w-[120px] mx-auto"
  @click="addFav(movie)">
    <span>Add to favorite</span>
  </div>
</template>

<script setup>
import { inject} from 'vue';

const props = defineProps({
  movie:Object
})
const favorites = inject('favorites')
const addFav = (item) => {
  favorites.push(item)
  item.isFav = true
}
</script>
