import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Currency from '../views/Currency.vue'
import Temperature from '../views/Temperature.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/currency',
    name: 'Currency',
    component: Currency
  },
  {
    path: '/temperature',
    name: 'Temperature',
    component: Temperature
  }     
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
