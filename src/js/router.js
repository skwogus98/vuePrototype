import { createRouter, createWebHistory } from "vue-router";

const MainView = () => import("../views/MainView.vue");
const LoginView = () => import("../views/LoginView.vue");
const RegisterView = () => import("../views/RegisterView.vue");
const RoomListView = () => import("../views/RoomListView.vue");
const OrderListView = () => import("../views/OrderListView.vue");
const ReportView = () => import("../views/ReportView.vue");
const CreateRoomView = () => import("../views/CreateRoomView.vue");
const CashView = () => import("../views/CashView.vue");
const KakaoPaySuccessView = () => import("../views/KakaoPaySuccessView.vue");

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
  {
    path: "/cash",
    component: CashView,
  },
  {
    path: "/kakaoPaySuccess",
    component: KakaoPaySuccessView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
