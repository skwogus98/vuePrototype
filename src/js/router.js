import {createRouter, createWebHistory} from "vue-router";

const Home = () => import('./views/Search.vue')
const Login = () => import('./views/Login.vue')
const signup = () => import('./views/SignUp.vue')
const Board = () => import('./views/Board.vue')

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