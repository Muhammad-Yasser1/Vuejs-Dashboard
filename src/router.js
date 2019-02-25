import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/pages",
      name: "Pages",
      component: () => import("./views/Pages.vue")
    },
    {
      path: "/pages/new",
      name: "New",
      component: () => import("./views/New.vue")
    },
    {
      path: "/menus",
      name: "Menus",
      component: () => import("./views/Menus.vue")
    }
  ]
});
