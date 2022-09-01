import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Competences from '../views/Competences.vue'
import Exp from '../views/Exp'
import Contact from '../views/Contact'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/competences',
        name: 'Competences',
        component: Competences,
    },
    {
        path: '/projects',
        name: 'Exp',
        component: Exp,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        if (to.hash) {
            return { el: to.hash }
        }
        return { x: 0, y: 0 }
    },
})

export default router
