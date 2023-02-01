<template>
  <section>
    <div v-if="error" class="text-center py-16">
      {{ error }}
    </div>
    <div class="grid" v-if="data">
      <div v-for="item,index in data.items" :key="item.id" class="text-center grid sm:grid-cols-[0.4fr,1fr] max-w-[650px] w-[80vw] mx-auto shadow-[1px_1px_3px_#999996] m-2">
        <div class="flex items-center justify-center bg-slate-300 p-2">
          <p class="sm:text-[7.5rem] text-[3rem] text-center font-semibold  text-slate-700">
            {{ index+1 }}
          </p>
        </div>
        <div class="bg-slate-200 p-2">
          <p class="text-lg">
            {{ item.fullTitle }}
          </p>
          <p>
            Rating: {{ item.imDbRating }}
          </p>
          <img :src="item.image" loading="lazy" alt="movie image" class="max-w-[75%] mx-auto">
        </div>
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
