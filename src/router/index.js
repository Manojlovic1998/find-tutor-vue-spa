import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/requests",
    name: "requests",
    meta: {
      requireAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "request" */ "../views/RequestsPage.vue"),
  },
  {
    path: "/tutor/:id",
    name: "tutor",
    props: true,
    component: () =>
      import(/* webpackChunkName: "tutor" */ "../views/TutorPage.vue"),
    children: [
      {
        path: "contact",
        name: "contact",
        component: () =>
          import(
            /* webpackChunkName: "tutor-contact" */ "../views/ContactPage.vue"
          ),
      },
    ],
  },
  {
    path: "/tutor/registration",
    name: "tutorRegistration",
    meta: {
      requireAuth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "registration" */ "../views/TutorRegistration.vue"
      ),
  },
  {
    path: "/signup",
    name: "signup",
    meta: {
      requireUnAuth: true,
    },
    component: () =>
      import(/* webpackChunkName: "sign-up" */ "../views/SignUpPage.vue"),
  },
  {
    path: "/:pathMatched(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "tutor" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
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

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !store.getters.isAuthenticated) {
    next({ name: "signup" });
  } else if (to.meta.requireUnAuth && store.getters.isAuthenticated) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
