import router from "@/router";
import { useUserStoreHook } from "@/store/modules/user";
import { usePermissionStoreHook } from "@/store/modules/permission";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({ showSpinner: false }); // progress bar

const permissionStore = usePermissionStoreHook();

// Whitelist routes
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  // const hasToken = localStorage.getItem("accessToken");
  const hasToken = true;
  if (hasToken) {
    if (to.path === "/login") {
      // If logged in, jump to the home page
      next({ path: "/" });
      NProgress.done();
    } else {
      const userStore = useUserStoreHook();
      const hasRoles = userStore.roles && userStore.roles.length > 0;
      if (hasRoles) {
        // Did not match any route, jump to 404
        if (to.matched.length === 0) {
          from.name ? next({ name: from.name }) : next("/404");
        } else {
          next();
        }
      } else {
        try {
          const { roles } = await userStore.getInfo();
          const accessRoutes = await permissionStore.generateRoutes(roles);
          accessRoutes.forEach((route) => {
            router.addRoute(route);
          });
          next({ ...to, replace: true });
        } catch (error) {
          // Remove token and redirect to login page
          await userStore.resetToken();
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    // You can visit the whitelist page without logging in
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
