import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import About from '@/components/About.vue'
import Address from '@/components/Address.vue'
import Contact from '@/components/Contact.vue'
import Skills from '@/components/Skills.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'About', component: About },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
