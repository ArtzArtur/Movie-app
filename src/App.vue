<template>
  <main>
    <header>
      <Home />
    </header>
    <router-view v-slot="{ Component }" >
      <transition name="fade" mode="out-in" >
        <KeepAlive>
        <component :is="Component" :key="$route.path"/>
        </KeepAlive>
      </transition>
    </router-view>
  </main>
</template>

<script setup>
import { provide,ref } from 'vue';
import Home from './views/Home.vue'

const favorites = ref([])
provide('favorites',favorites.value)

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