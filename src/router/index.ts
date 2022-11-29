import { createRouter, createWebHistory } from 'vue-router'
import ComponentsView from '../views/ComponentsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'components',
      component: ComponentsView,
    },
  ],
})

export default router
