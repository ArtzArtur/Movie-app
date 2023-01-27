<template>
  <section class="flex flex-wrap justify-center">
    <div v-if="loading">
        Loading...
    </div>
    <div v-if="error">
      {{ error }}
  </div>
    <div v-for="movie in movies" :key="movie.imdbID" class=" text-center m-2 flex flex-col justify-between max-w-[230px]" :class="[movie.Poster==='N/A' ? 'hidden' : null]" >
      <div>
        <p>{{ movie.Title}}</p>
        <p>{{ movie.Year}}</p>
      </div>
      <img :src="movie.Poster" class=" mx-auto block w-[230px] h-[330px]" alt="movie poster">
      
      
    </div>

  </section>
</template>

<script setup>
const props = defineProps({
  loading:Boolean,
  error:String,
  movies:Object
})
</script>