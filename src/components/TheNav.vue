<template>
  <div>
    <nav class="max-w-[800px] mx-auto bg-slate-50">
      <ul class="p-2 grid text-center sm:flex justify-evenly">
        <router-link tag="li" class="p-2" :to="{name:'TheSearch'}">Movie search</router-link>
        <router-link tag="li" class="p-2" :to="{name:'TopMovies'}">Top 250 movies</router-link>
        <router-link tag="li" class="p-2" :to="{name:'TopSeries'}">Top 250 series</router-link>
        <router-link tag="li" class="p-2" :to="{name:'Favorites'}">Favorites</router-link>
      </ul>
    </nav>
  </div>
</template>