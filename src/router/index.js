import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import TvShows from '../views/TvShows.vue';
import MoviesPage from '../views/MoviesPage.vue'
import SearchPage from '../views/SearchPage.vue';
import MovieDetails from '../views/MovieDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tv-shows',
      name: 'Tv Shows',
      component: TvShows
    },
    {
      path: '/movies',
      name: 'Movies',
      component: MoviesPage
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchPage
    },
    {
      path: '/movie-details/:media_type/:id',
      name: 'MovieDetails',
      component: MovieDetails
    },
  ]
})

export default router
