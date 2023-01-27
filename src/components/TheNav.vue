<template>
  <div>
    <nav>
      <ul class="p-2 flex justify-around">
        <router-link tag="li" class="p-2" :to="{name:'TheSearch'}">Movie search</router-link>
        <router-link tag="li" class="p-2" :to="{name:'TopMovies'}">Movie ranking</router-link>
      </ul>
    </nav>
  </div>
</template>