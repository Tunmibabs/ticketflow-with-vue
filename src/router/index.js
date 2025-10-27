import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import DashboardPage from "../pages/DashboardPage.vue";
import TicketsPage from "../pages/TicketsPage.vue";
import AnalyticsPage from "../pages/AnalyticsPage.vue";
import SettingsPage from "../pages/SettingsPage.vue";
import SignupPage from "../pages/SignupPage.vue";

const routes = [
  {
    path: "/",
    component: LandingPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/login",
    component: LoginPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/signup",
    component: SignupPage,
    meta: { requiresAuth: false },
  },
  {
    path: "/dashboard",
    component: DashboardPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/tickets",
    component: TicketsPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/analytics",
    component: AnalyticsPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/settings",
    component: SettingsPage,
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("authToken");
  const requiresAuth = to.meta.requiresAuth;

  if (requiresAuth && !token) {
    next("/login");
  } else if (
    !requiresAuth &&
    token &&
    (to.path === "/login" || to.path === "/signup")
  ) {
    next("/dashboard");
  } else {
    next();
  }
});

export default router;
