import { createWebHistory, createRouter } from 'vue-router';
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Starsheep from '@/views/Starsheep.vue'
import Work from '@/views/Work.vue'

const routes = [
  {
    path: '/',
    redirect: '/work',
  },  
  {
    path: "/work",
    name: "Work",
    component: Work,
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