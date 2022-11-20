import { createWebHistory, createRouter } from 'vue-router';
import Main from '@/views/Main.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Starsheep from '@/views/Starsheep.vue'
import WorkPage from '@/views/WorkPage.vue'
import ProjectPage from '@/views/ProjectPage.vue'

import projects from '~/projects.json';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },  
  {
    path: "/work",
    name: "Work",
    component: WorkPage,
  },
  {
    path: '/work/:id',
    name: 'Project',
    component: ProjectPage,
    beforeEnter: (to) => {
      return !!projects.find(project => project.id === Number(to.params.id))
    },
    props: route => ({
      project: projects.find(project => project.id === Number(route.params.id))
    }),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/starsheep",
    name: "Starsheep",
    component: Starsheep,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;