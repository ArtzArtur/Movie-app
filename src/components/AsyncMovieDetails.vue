<template>
  <div class="grid bg-slate-100 p-4 md:grid-cols-2 w-3/4 mx-auto">
    <img :src="movie.Poster" alt="movie poster" class="mb-4 justify-self-center md:m-0">
    <section class="text-center mx-auto grid md:grid-cols-2">
      <h1 class="p-2 text-center text-3xl font-bold md:col-span-full grid place-content-center">{{ movie.Title }}</h1>
      <p :class="[
          movie.imdbRating > 8 ? 'bg-green-600' :
            movie.imdbRating > 7 ? 'bg-green-300' :
              movie.imdbRating > 5 ? 'bg-yellow-200' :
                movie.imdbRating < 5 ? 'bg-red-300' :
                  movie.imdbRating < 3 ? 'bg-red-600' :
                    null
        ]" class="p-2 md:col-span-full grid place-content-center">Imdb rating: {{ movie.imdbRating }} / 10</p>
      <article class="grid place-content-center">
        <p class="p-2">Director: {{ movie.Director }}</p>
        <p class="p-2">Writer: {{ movie.Writer }}</p>
        <p class="p-2">Actors: {{ movie.Actors }}</p>
      </article>

      <article class="grid place-content-evenly">

        <p class="p-2">Genre: {{ movie.Genre }}</p>
        <p class="p-2">Boxoffice: {{ movie.BoxOffice }}</p>
        <p class="p-2">Imdb votes: {{ movie.imdbVotes }}</p>
      </article>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String
})
const apiKey = import.meta.env.VITE_SEARCH_APIKEY

const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${props.id}`)
const movie = await response.json()
console.log(movie)
</script>
