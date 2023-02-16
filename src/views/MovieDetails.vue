<template>
  <div>
    <back-btn />
    <button class="block mx-auto">Add</button>
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
import BackBtn from '../components/BackBtn.vue'
import Loader from '../components/Loader.vue';
const props = defineProps({
  id:String
})

</script>