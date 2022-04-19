import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RequestsPage from "../views/RequestsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/requests",
    name: "requests",
    component: RequestsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
