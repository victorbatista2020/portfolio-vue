import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'About', component: About },
  { path: '/skills', name: 'Skills', component: Skills },
  { path: '/Projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
