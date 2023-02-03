<template>
  <section class="flex flex-wrap justify-center">
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="loading">
      <Loader />
    </div>
    <div v-for="movie in movies" :key="movie.imdbID">
      <MovieCard :movie="movie" />
    </div>
  </section>
</template>

<script setup>
import Loader from './Loader.vue';
import MovieCard from './MovieCard.vue';
const props = defineProps({
  loading: Boolean,
  error:  null,
  movies: Array
})

</script>