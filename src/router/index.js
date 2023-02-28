import { createRouter, createWebHistory } from 'vue-router'
import TopMovies from '../views/TopMovies.vue'
import TheSearch from '../views/TheSearch.vue'
import MovieDetails from '../views/MovieDetails.vue'
import TopSeries from '../views/TopSeries.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/movie-app/TopMovies',
    name: 'TopMovies',
    component: TopMovies
  },
  {
    path: '/movie-app/',
    name: 'TheSearch',
    component: TheSearch
  },
  {
    path: '/movie-app/MovieDetails/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true
  },
  {
    path: '/movie-app/TopSeries',
    name: 'TopSeries',
    component: TopSeries
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
