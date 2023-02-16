<template>
  <div>
    <BackBtn />
    <Suspense>
      <template #default>
        <TopResults :url="url"/>
      </template>
      <template #fallback>
        <Loader />
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import BackBtn from '../components/BackBtn.vue';
import Loader from '../components/Loader.vue';
import TopResults from '../components/TopResults.vue';
const apiKey = import.meta.env.VITE_IMDB_APIKEY
const url = `https://imdb-api.com/en/API/Top250TVs/${apiKey}`

</script>