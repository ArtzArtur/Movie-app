<template>
  <section>
    <div v-if="error" class="text-center py-16">
      {{ error }}
    </div>
    <div class="grid" v-if="data">
      
      <div v-for="item in data.items" :key="item.id" >
          <router-link class="text-center grid sm:grid-cols-[0.4fr,1fr] max-w-[650px] w-[80vw] mx-auto shadow-[1px_1px_3px_#999996] m-2"
          :to="{name:'MovieDetails',params:{
            id:item.id
          }}">
          <div class="flex items-center justify-center bg-slate-100 p-2">
          <p class="sm:text-[7.5rem] text-[3rem] text-center font-semibold  text-slate-700">
            {{ item.rank}}
          </p>
        </div>
        <div>
          <header class="p-4">
            <p class="text-lg">
              {{ item.fullTitle }}
            </p>
            <p>
              Rating: {{ item.imDbRating }}
            </p>
          </header>
          <img :src="item.image" loading="lazy" alt="movie image" class="max-w-[75%] max-h-[450px] mx-auto">
        </div>
          </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import useFetch from './services/useFetch';
const props = defineProps({url:String})

const { data, error, fetchData } = useFetch(props.url)
await fetchData();
console.log(data)


</script>
