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
  },
  {
    path: '/vue3Core',
    name: 'Vue3Core',
    component: () => import('../views/Vue3Core.vue')
  },
  {
    path: '/computed',
    name: 'Computed',
    component: () => import('../views/Computed.vue')
  },
  {
    path: '/watch',
    name: 'Watch',
    component: () => import('../views/Watch.vue')
  },
  {
    path: '/lifeCycle',
    name: 'LifeCycle',
    component: () => import('../views/LifeCycle.vue')
  },
  {
    path: '/hook',
    name: 'Hook',
    component: () => import('../views/Hook.vue')
  },
  {
    path: '/toRefs',
    name: 'ToRefs',
    component: () => import('../views/ToRefs.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
