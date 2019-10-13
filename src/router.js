import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Musik from './views/Musik.vue'
import Film from './views/Film.vue'
import DetailsMusik from './views/DetailsMusik.vue'
import DetailsFilm from './views/DetailsFilm.vue'
import DetailsSeniman from './views/DetailsSeniman.vue'
// import Search from './views/Search.vue'
import Visualisasi from './views/Visualisasi.vue'
import Seniman from './views/Seniman.vue'
import DetailsPengarangMusik from './views/DetailsPengarangMusik.vue'

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
      path: '/musik',
      name: 'musik',
      component: Musik
    },
    {
      path: '/film',
      name: 'film',
      component: Film
    },
    {
      path: '/detailsMusik/:id',
      name: 'detailsMusik',
      component: DetailsMusik
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
      path: '/detailsPengarangMusik',
      name: 'detailsPengarangMusik',
      component: DetailsPengarangMusik
    },

  ]
})
