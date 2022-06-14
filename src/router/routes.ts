import { RouteRecordRaw } from "vue-router"
import Home from "@/views/Home.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/team',
    component: () => import('@/views/Team.vue'),
  },
  {
    path: '/contact',
    component: () => import('@/views/Contact.vue'),
  },
]

export default routes
