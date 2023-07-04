import { createWebHistory, createRouter } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import WorkPage from '@/views/WorkPage.vue'
import ProjectPage from '@/views/ProjectPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/work',
    name: 'Work',
    component: WorkPage,
  },
  {
    path: '/work/:projectId',
    name: 'Project',
    component: ProjectPage,
    props: true,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
