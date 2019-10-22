import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Lagu from './views/Lagu.vue'
import Film from './views/Film.vue'
import DetailsLagu from './views/DetailsLagu.vue'
import DetailsFilm from './views/DetailsFilm.vue'
import DetailsSeniman from './views/DetailsSeniman.vue'
// import Search from './views/Search.vue'
import Visualisasi from './views/Visualisasi.vue'
import Seniman from './views/Seniman.vue'
import DetailsPengarangLagu from './views/DetailsPengarangLagu.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/lagu',
      name: 'lagu',
      component: Lagu
    },
    {
      path: '/film',
      name: 'film',
      component: Film
    },
    {
      path: '/detailsLagu/:id',
      name: 'detailsLagu',
      component: DetailsLagu
    },
    {
      path: '/detailsFilm/:id',
      name: 'detailsFilm',
      component: DetailsFilm
    },
    {
      path: '/detailsSeniman',
      name: 'detailsSeniman',
      component: DetailsSeniman
    },
    // {
    //   path: '/search',
    //   name: 'search',
    //   component: Search
    // },
    {
      path: '/visualisasi',
      name: 'visualisasi',
      component: Visualisasi
    },
    {
      path: '/seniman',
      name: 'seniman',
      component: Seniman
    },
    {
      path: '/detailsPengarangLagu',
      name: 'detailsPengarangLagu',
      component: DetailsPengarangLagu
    },

  ]
})
