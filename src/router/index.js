import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/requests",
    name: "requests",
    component: () =>
      import(/* webpackChunkName: "request" */ "../views/RequestsPage.vue"),
  },
  {
    path: "/tutor/:id",
    name: "tutor",
    component: () =>
      import(/* webpackChunkName: "tutor" */ "../views/TutorPage.vue"),
  },
  {
    path: "/:pathMatched(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "tutor" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0 });
        }, 3000);
      })
    );
  },
});

export default router;
