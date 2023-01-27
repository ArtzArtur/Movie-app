<template>
  <div>
    <div>
      <Suspense>
        <template #default>
          <TopMoviesResults />
        </template>
        <template #fallback>
          Loading....
        </template>

      </Suspense>
    </div>

  </div>
</template>

<script setup>
import TopMoviesResults from "../components/TopMoviesResults.vue"

</script>

<style lang="scss" scoped>

</style>