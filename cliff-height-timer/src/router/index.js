import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/History.vue'
import AboutView from '../views/About.vue'
import ConvertisseurView from '../views/Convertisseur.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About_vue',
    component: AboutView
  },
  {
    path: '/history',
    name: 'History_vue',
    component: HistoryView
  },
  {
    path: '/convertisseur',
    name: 'Convertisseur_vue',
    component: ConvertisseurView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
