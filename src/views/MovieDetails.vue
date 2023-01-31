<template>
  <div>
    <i 
    @click="$router.push({name:'TheSearch'})"
    class="fa fa-arrow-left px-2 hover:transform hover:scale-125 cursor-pointer"></i>
      <div>
        <Suspense>
          <template #default>
            <AsyncMovieDetails :id="id" />
          </template>
          <template #fallback>
              <Loader />
          </template>
        </Suspense>
      </div>
  </div>
</template>

<script setup>
import AsyncMovieDetails from '../components/AsyncMovieDetails.vue'
import Loader from '../components/Loader.vue';
const props = defineProps({
  id:String
})

</script>

<style lang="scss" scoped>

</style>