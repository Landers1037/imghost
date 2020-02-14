import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../components/index";
import about from "../components/about";
import bed from "../components/bed";
import rule from "../components/rule";
import key from "../components/key";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/bed',
        name: 'bed',
        component: bed
    },
    {
        path: '/rule',
        name: 'rule',
        component: rule
    },
    {
        path: '/key',
        name: 'key',
        component: key
    },

]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
