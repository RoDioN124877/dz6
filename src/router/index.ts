import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')

    },
    {
      path: '/photo/:id',
      name: 'photo',
      props: true,
      component: () => import('../views/PhotoView.vue')
    },
    {
      path: '/gallary',
      name: 'gallary',
      props: true,
      component: () => import('../views/GallaryView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      props: true,
      component: () => import('../views/ContactsView.vue')
    }
  ]
})

export default router
