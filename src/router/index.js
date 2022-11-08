import { createRouter, createWebHistory } from 'vue-router'
import TopView from '../views/TopView.vue'
import HomeDetail from '../views/HomeDetail.vue'
// import CompanyView from '../views/CompanyComponents.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TopView
  },
  {
    path: '/home-detail',
    name: 'homedetail',
    component: HomeDetail
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
