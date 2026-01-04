import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
import Skills from '@/components/Skills.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/contact', name: 'Contact', component: Contact }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
