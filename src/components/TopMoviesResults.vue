<template>
  <section>
    <div v-if="moviesLoad">
      <Loader />  
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
import Loader from './Loader.vue';
import useFetch from './services/useFetch';
const apiKey = import.meta.env.VITE_TOP_APIKEY
const url = `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
const { data:movies, loading:moviesLoad, error, fetchData } = useFetch(url)
// await fetchData();


</script>
