import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () => import('../views/Setup.vue')
  },
  {
    path: '/ref',
    name: 'Ref',
    component: () => import('../views/Ref.vue')
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: () => import('../views/Reactive.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
