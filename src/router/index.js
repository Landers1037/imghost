import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "../components/Main";
import about from "../components/about";
import upload from "../components/upload";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
