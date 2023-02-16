<template>
  <section>
    <div v-if="error" class="text-center py-16">
      {{ error }}
    </div>
    <div class="grid" v-if="data">
      <div v-for="item in data.items.slice(start,end)" :key="item.id" >
        <TopMovieCard :movie="item" />
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
import { inject, ref } from 'vue';
import TopMovieCard from './TopMovieCard.vue';
import useFetch from './services/useFetch';
const store = inject('store')
const props = defineProps({url:String})
const page = ref(1)
const limit = ref(10)
const start = ref(0)
const end = ref(10)
const { data, error, fetchData } = useFetch(props.url)
await fetchData();
data.value.items.forEach(element => {
  element.isFav=false
});
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
