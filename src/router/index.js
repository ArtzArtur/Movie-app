import { createRouter, createWebHistory } from 'vue-router'
import TopMovies from '../views/TopMovies.vue'
import TheSearch from '../views/TheSearch.vue'
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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
