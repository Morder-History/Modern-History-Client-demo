import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const Home = () => import("@/views/Home/Home.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
