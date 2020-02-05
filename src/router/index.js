import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: { title: 'Home' }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { title: 'About Us' }
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        // route level code-splitting
        // this generates a separate chunk (portfolio.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue'),
        meta: { title: 'Our Work' }
    },
    {
        path: '/contact-us',
        name: 'contact',
        // route level code-splitting
        // this generates a separate chunk (contact.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
        meta: { title: 'Contact Us' }
    },
    {
        path: '/get-quote',
        name: 'getQuote',
        // route level code-splitting
        // this generates a separate chunk (contact.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "getQuote" */ '../views/getQuote.vue'),
        meta: { title: 'Get Quote' }
    },

]

const router = new VueRouter({
    routes,
    mode: 'history',
})
router.afterEach((to, from) => {
    document.title = "Aimtech | " + to.meta.title;
});

export default router
