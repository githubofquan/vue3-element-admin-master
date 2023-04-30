import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

export const Layout = () => import("@/layout/index.vue");

// Static routing
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: { hidden: true },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue"),
      },
    ],
  },

  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: { hidden: true },
  },
  {
    path: "/alpha",
    component: Layout,
    redirect: "/alpha/alpha",
    children: [
      {
        path: "alpha",
        component: () => import("@/views/alpha/alpha/index.vue"),
        name: "alpha",
        meta: { title: "alpha", icon: "homepage"},
      }
    ],
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: { title: "dashboard", icon: "homepage", affix: true },
      },
      {
        path: "401",
        component: () => import("@/views/error-page/401.vue"),
        meta: { hidden: true },
      },
      {
        path: "404",
        component: () => import("@/views/error-page/404.vue"),
        meta: { hidden: true },
      },
    ],
  },


];

/**
 * Create route
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // When refreshing, the rolling bar position is restored
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

/**
 * Reset the route
 */
export function resetRouter() {
  router.replace({ path: "/login" });
  location.reload();
}

export default router;
