<template>
  <div>
    <div class=" text-center grid min-w-[250px] max-w-[450px] mx-auto shadow-[1px_1px_3px_#999996] m-2">
      <button @click="movie.movie.isFav=!movie.movie.isFav">Click</button>
      <router-link 
      :to="{name:'MovieDetails',params:{
        id:movie.movie.id
      }}">
      <div class="flex items-center justify-center bg-slate-100 p-2">
      <p class="sm:text-[4.5rem] text-[3rem] text-center font-semibold  text-slate-700">
        {{ movie.movie.rank}}
      </p>
    </div>
    <div class="py-4">
      <header>
        <p class="text-lg">
          {{ movie.movie.isFav }}
        </p>
        <p class="text-lg">
          {{ movie.movie.fullTitle }}
        </p>
        <p>
          Rating: {{ movie.movie.imDbRating }}
        </p>
      </header>
      <img :src="movie.movie.image" alt="movie image" class="max-w-[100%] max-h-[450px] mx-auto">
    </div>
  </router-link>
</div>
  </div>
</template>

<script setup>
const movie = defineProps({
  movie:Object
})
</script>

