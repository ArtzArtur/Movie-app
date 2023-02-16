<template>
  <div>
    <nav class="max-w-[800px] mx-auto">
      <ul class="p-2 flex justify-evenly">
        <router-link class="p-2 hover:text-slate-400" :to="{name:'TheSearch'}">Movie search</router-link>
        <router-link class="p-2 hover:text-slate-400" :to="{name:'TopMovies'}">Top 250 movies</router-link>
        <router-link class="p-2 hover:text-slate-400" :to="{name:'TopSeries'}">Top 250 series</router-link>
        <router-link class="p-2 hover:text-slate-400" :to="{name:'TheFavorites'}">Favorites</router-link>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
a.router-link-active{
  text-decoration: underline;
}
</style>