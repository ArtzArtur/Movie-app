<template>
  <section>
    <div v-if="error" class="text-center py-16">
      {{ error }}
    </div>
    <div class="grid" v-if="data">
      
      <div v-for="item in data.items.slice(start,end)" :key="item.id" >
          <router-link ref="infiniteLoader" class=" text-center grid sm:grid-cols-[1fr,1fr] max-w-[450px] w-[40vw] mx-auto shadow-[1px_1px_3px_#999996] m-2"
          :to="{name:'MovieDetails',params:{
            id:item.id
          }}">
          <div class="flex items-center justify-center bg-slate-100 p-2">
          <p class="sm:text-[4.5rem] text-[3rem] text-center font-semibold  text-slate-700">
            {{ item.rank}}
          </p>
        </div>
        <div class="py-4">
          <header>
            <p class="text-lg">
              {{ item.fullTitle }}
            </p>
            <p>
              Rating: {{ item.imDbRating }}
            </p>
          </header>
          <img :src="item.image" alt="movie image" class="max-w-[75%] max-h-[450px] mx-auto">
        </div>
          </router-link>
        </div>
        <div class="p-4" v-if="data.items">
          <div class="text-center">
            {{ page }} / {{ data.items.length/10 }}
          </div>
          <div class="flex gap-2 justify-center">

            <button class="px-4 py-1 bg-slate-200 rounded-md hover:bg-slate-400"
            v-if="page>1"
            @click="changePage">Prev</button>
            <button class="px-4 py-1 bg-slate-200 rounded-md hover:bg-slate-400"
            @click="changePage('+')"
            v-if="page<25">Next</button>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import useFetch from './services/useFetch';
const props = defineProps({url:String})
const infiniteLoader = ref()
const page = ref(1)
const limit = ref(10)
const start = ref(0)
const end = ref(10)
const { data, error, fetchData } = useFetch(props.url)

await fetchData();

const changePage = (val) => {
  if(val==="+"){
  page.value++
  }
  else{
  page.value--
  }
  start.value = (page.value*limit.value)-limit.value
  end.value = page.value*limit.value
}


</script>
