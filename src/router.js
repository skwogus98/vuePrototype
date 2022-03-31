import {createRouter, createWebHistory} from "vue-router";

const Home = () => import('./components/Search.vue')
const Login = () => import('./components/Login.vue')
const signup = () => import('./components/SignUp.vue')

const routes = [
    {
        Path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: signup
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router