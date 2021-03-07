import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/tinymce',
    name: 'tinymce',
    component: () => import('@/views/tinymce.vue')
  },
  {
    path: '/line',
    name: 'line',
    component: () => import('@/views/line.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
