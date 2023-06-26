import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Starsheep from "@/views/Starsheep.vue";
import WorkPage from "@/views/WorkPage.vue";
import ProjectPage from "@/views/ProjectPage.vue";
import ProjectBlockedPage from "@/views/ProjectBlockedPage.vue";

// import projects from '/projects.json';
/* eslint-disable no-debugger */

const routes = [
  {
    path: "/",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/work",
    name: "Work",
    component: WorkPage,
  },
  // {
  //   path: '/work/:id',
  //   name: 'Project',
  //   component: ProjectPage,
  //   beforeEnter: (to, from, next) => {
  //     const project = projects.find(project => project.id === Number(to.params.id))

  //     if (!project)
  //       return false

  //     if (!project.blocked)
  //       return next()

  //     const isBlockedPageEnabled = window.localStorage.getItem('enabled')
  //     if (isBlockedPageEnabled)
  //       return next()

  //     next({ path: `/work/blocked/${to.params.id}` })
  //   },
  //   props: route => ({
  //     project: projects.find(project => project.id === Number(route.params.id))
  //   }),
  // },
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
  {
    path: "/work/blocked/:id",
    name: "ProjectBlockedPage",
    component: ProjectBlockedPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
