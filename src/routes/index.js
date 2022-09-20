import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/pages/HomePage.vue';
import AboutPage from '@/pages/AboutPage.vue';
import BlogPage from '@/pages/BlogPage.vue';
import ContactPage from '@/pages/ContactPage.vue';
import MenuPage from '@/pages/MenuPage.vue';

const routers = [
    {
        path: '',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/about-us',
        name: 'AboutPage',
        component: AboutPage
    },
    {
        path: '/blog',
        name: 'BlogPage',
        component: BlogPage
    },
    {
        path: '/contact-us',
        name: 'ContactPage',
        component: ContactPage
    },
    {
        path: '/our-menu',
        name: 'MenuPage',
        component: MenuPage
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes: routers,
    // eslint-disable-next-line
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return {
            top: 0,
            behavior: 'instant'
        }
    },
});

export default router