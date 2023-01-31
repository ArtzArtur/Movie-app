<template>
  <div>
    <nav class="max-w-[800px] mx-auto">
      <ul class="p-2 flex justify-evenly">
        <router-link tag="li" class="p-2" :to="{name:'TheSearch'}">Movie search</router-link>
        <router-link tag="li" class="p-2" :to="{name:'TopMovies'}">Movie propositions</router-link>
      </ul>
    </nav>
  </div>
</template>