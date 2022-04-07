import {createRouter, createWebHistory} from "vue-router";

const Home = () => import('../views/SearchView.vue')
const Login = () => import('../views/LoginView.vue')
const signup = () => import('../views/SignUpView.vue')
const Board = () => import('../views/BoardView.vue')

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
    {
        path: '/board/:id',
        component: Board
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router