<template>
  <div>
    <form 
    @submit.prevent="search"
    class="min-h-[200px] bg-blue-100 grid place-content-center">
      <input placeholder="Movie title" type="text" class="p-2 rounded-md mb-2" v-model="searchedMovie">
      <button
      class="p-1 shadow-[0px_0px_2px_#000] w-24 mx-auto bg-blue-50 hover:bg-black hover:text-white">Search</button>
    </form>
    <div>
      <SearchResults :movies="movies" :loading="loading" :error="error" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref,reactive,toRefs} from 'vue';
import useFetch from '../components/services/useFetch';
import SearchResults from '../components/SearchResults.vue';


const apiKey = import.meta.env.VITE_SEARCH_APIKEY
const searchedMovie = ref()
const state = reactive({
  movies:null,
  loading:null,
  error:""
})
const {movies,loading,error} = toRefs(state)

const search = async() =>{
  state.loading=true
  state.error,state.movies = null

  const {data, error,fetchData} = useFetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchedMovie.value}`)
  state.error = null
  await fetchData()
  console.log(data.value)
  state.movies = data.value.Search
  state.error = error
  state.loading=false
}
</script>