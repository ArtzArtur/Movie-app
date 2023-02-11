<template>
  <div>
    {{ store.state.favorites }}
  </div>
</template>

<script setup>
import { inject } from 'vue';

const store = inject('store')
</script>

<style lang="scss" scoped>

</style>