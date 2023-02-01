<template>
  <div>
    <i 
    @click="$router.go(-1)"
    class="fa fa-arrow-left pl-8 md:pl-16 hover:transform hover:scale-[1.1] cursor-pointer"></i>
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