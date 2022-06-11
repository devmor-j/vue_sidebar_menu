import { createRouter, createWebHistory, Router, RouterHistory } from 'vue-router'
import routes from './routes'

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
