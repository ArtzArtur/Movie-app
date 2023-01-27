<template>
  <div>
    <header>
      <Home />
    </header>
    <router-view v-slot="{ Component }" >
      <transition name="fade" mode="out-in" >
        <component :is="Component" :key="$route.path"/>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import Home from './components/Home.vue'
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