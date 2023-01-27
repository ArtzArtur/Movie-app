<template>
  <section>
    <div v-if="moviesLoad">
      loading....
    </div>
    <div v-if="error">
      {{ error }}
    </div>
    <div class="grid grid-cols-3" v-if="movies">
      <div v-for="movie in movies.items" :key="movie.id">
        {{ movie.fullTitle }}
        <p>
          {{ movie.imDbRating }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import useFetch from './services/useFetch';
const apiKey = "k_298l3iep"
const url = `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
const test = ref("my test")
const { data:movies, loading:moviesLoad, error, fetchData } = useFetch(url)
// await fetchData();


</script>
