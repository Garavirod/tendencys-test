import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeRouer from '@/modules/home/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    ...HomeRouer,
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
