<template>
  <div>
    <form @submit.prevent="search(page=1)" class="min-h-[200px] bg-blue-100 grid place-content-center">
      <input placeholder="Movie title" type="text" class="p-2 rounded-md mb-2 focus:outline-blue-300"
        v-model="searchedMovie">
      <button
        class="p-1 shadow-[0px_0px_2px_#000] w-24 mx-auto bg-blue-50 hover:bg-black hover:text-white">Search</button>
        <div v-if="minChars" class="relative">
          <span class="text-red-600 p-2 absolute top-0 left-0 text-center text-sm whitespace-nowrap">Minimum 3 characters required</span>
        </div>
    </form>
    <div>
      <SearchResults :movies="movies" :loading="loading" :error="error" />
    </div>
    <div v-if="movies" class="p-2">
      <div class="text-center">
      Page {{ page }} of {{ movies.total }}
      </div>
      <div class="flex justify-center gap-2 p-2">
        <button 
        class="px-4 py-1 bg-slate-200 rounded-md hover:bg-slate-400" 
        @click="search(page--)"
        v-if="page>1">Prev</button>
        <button 
        class="px-4 py-1 bg-slate-200 rounded-md hover:bg-slate-400"
        @click="search(page++)"
        v-if="page<movies.total">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import useFetch from '../components/services/useFetch';
import SearchResults from '../components/SearchResults.vue';


const apiKey = import.meta.env.VITE_SEARCH_APIKEY
const searchedMovie = ref()
const page = ref(1)
const minChars = ref(false)
const state = reactive({
  movies: null,
  loading: null,
  error: ""
})
const { movies, loading, error } = toRefs(state)
const search = async() => {
  if(searchedMovie.value.trim().length>2){
  minChars.value = false
  state.loading = true
  state.error, state.movies = null
  const { data, error, fetchData } = useFetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${searchedMovie.value}&page=${page.value}`)
  state.error = null
  await fetchData()
  if(data.value.Search && data.value.totalResults){
  state.movies = data.value.Search
  data.value.Search.total = Math.ceil(data.value.totalResults / 10)
  }
  console.log(movies)
  state.error = error
  state.loading = false
}else{
  minChars.value = true
}
}
</script>