import { createRouter, createWebHistory } from "vue-router";

const MainView = () => import("../views/MainView.vue");
const LoginView = () => import("../views/LoginView.vue");
const RegisterView = () => import("../views/RegisterView.vue");
const RoomListView = () => import("../views/RoomListView.vue");
const CreateRoomView = () => import("../views/RoomListView.vue");
const OrderListView = () => import("../views/OrderListView.vue");
const ReportView = () => import("../views/ReportView.vue");

const routes = [
  {
    Path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    component: MainView,
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/register",
    component: RegisterView,
  },
  {
    path: "/roomlist",
    component: RoomListView,
  },
  {
    path: "/createroom",
    component: CreateRoomView,
  },
  {
    path: "/orderlist",
    component: OrderListView,
  },
  {
    path: "/report",
    component: ReportView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
