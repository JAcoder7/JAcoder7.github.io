import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/register-gh-app',
      name: 'Register Github App',
      component: () => import('../views/RegisterGHAppView.vue'),
    },{
      path: '/redirect',
      alias: ["/:any/redirect"],
      name: 'Redirect',
      component: () => import('../views/Redirect.vue'),
    },
  ],
})

export default router
