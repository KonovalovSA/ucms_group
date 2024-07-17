import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import CardsList from '../views/CardsList.vue'
import CardInfo from '../views/CardInfo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'CardsList',
    component: CardsList
  },
  {
    path: '/:name',
    name: 'card',
    component: CardInfo,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
