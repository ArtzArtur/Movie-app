<template>
  <div>
    <BackBtn />
    <div v-if="favorites.length" class="flex flex-wrap justify-center">
      <div class="text-center p-2 shadow-md hover:shadow-[0px_0px_5px_#000] cursor-pointer max-w-[250px] m-4" v-for="fav in favorites"
        :key="fav.imdbID">
        <router-link :to="{
          name: 'MovieDetails', params: {
            id: fav.imdbID
          }
        }">
          <p>
            {{ fav.Title }}
          </p>
          <img :src="fav.Poster" class="h-[300px]" alt="movie poster">
        </router-link>
        <button class="block p-2 mx-auto shadow-mx text-red-500 hover:text-red-200" @click="fav.isFav = !fav.isFav">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject, computed, watchEffect } from 'vue';
import BackBtn from '../components/BackBtn.vue';

const store = inject('store')
const favorites = computed(() => {
  return store.state.favorites.filter(a => { return a.isFav })
})
watchEffect(() => favorites)
</script>

<style lang="scss" scoped>

</style>