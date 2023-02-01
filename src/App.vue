<template>
  <main>
    <header>
      <Home />
    </header>
    <router-view v-slot="{ Component }" >
      <transition name="fade" mode="out-in" >
        <KeepAlive include="TheSearch,TopMovies,TopSeries">
        <component :is="Component" :key="$route.path"/>
        </KeepAlive>
      </transition>
    </router-view>
  </main>
</template>

<script setup>
import Home from './views/Home.vue'
</script>

<style>

.fade-enter-from,
.fade-leave-to{
  opacity:0;
}
.fade-leave-active,
.fade-enter-active{
  transition: opacity .3s linear;
}

</style>