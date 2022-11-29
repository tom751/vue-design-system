import { createRouter, createWebHistory } from 'vue-router'
import ComponentsView from '../views/ComponentsView.vue'
import ComponentView from '../views/ComponentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'components',
      component: ComponentsView,
    },
    {
      path: '/components/:name',
      name: 'component',
      component: ComponentView,
    },
  ],
})

export default router
