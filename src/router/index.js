import { createRouter, createWebHistory } from 'vue-router'
import TopMovies from '../views/TopMovies.vue'
import TheSearch from '../views/TheSearch.vue'
import MovieDetails from '../views/MovieDetails.vue'
import TopSeries from '../views/TopSeries.vue'

const routes = [
  {
    path: '/TopMovies',
    name: 'TopMovies',
    component: TopMovies
  },
  {
    path: '/',
    name: 'TheSearch',
    component: TheSearch
  },
  {
    path: '/MovieDetails/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true
  },
  {
    path: '/TopSeries',
    name: 'TopSeries',
    component:TopSeries
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
