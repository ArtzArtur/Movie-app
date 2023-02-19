<template>
  <div>
    <nav class="max-w-[800px] mx-auto text-center p-6 sm:p-6 relative">
      <i class="nav-icon fas fa-bars" @click="activeNav=!activeNav"
      :class="[activeNav ? 'rotate-90' : null]"></i>
        <ul class="nav-bar"
        :class="[activeNav ? ['!opacity-100','!pointer-events-auto'] : null]">
        <router-link @click="activeNav=false" class="m-2" :to="{name:'TheSearch'}">Movie search</router-link>
        <router-link @click="activeNav=false" class="m-2" :to="{name:'TopMovies'}">Top 250 movies</router-link>
        <router-link @click="activeNav=false" class="m-2" :to="{name:'TopSeries'}">Top 250 series</router-link>
        <router-link @click="activeNav=false" class="m-2" :to="{name:'TheFavorites'}">Favorites</router-link>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';

  const activeNav = ref(false)
</script>

<style>

</style>