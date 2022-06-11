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
]

export default routes
