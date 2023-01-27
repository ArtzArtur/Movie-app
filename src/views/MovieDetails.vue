<template>
  <div>
    <i 
    @click="$router.push({name:'TheSearch'})"
    class="fa fa-arrow-left"></i>
    {{ props.id }}
      <div>
        <AsyncMovieDetails />
      </div>
  </div>
</template>

<script setup>
import AsyncMovieDetails from '../components/AsyncMovieDetails.vue'

const props = defineProps({
  id:String
})

</script>

<style lang="scss" scoped>

</style>