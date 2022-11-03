import { createWebHistory, createRouter } from 'vue-router';
import Main from '@/views/Main.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Starsheep from '@/views/Starsheep.vue'
import WorkPage from '@/views/WorkPage.vue'

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