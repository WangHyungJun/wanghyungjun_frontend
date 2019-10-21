import Vue from "vue";
import Router from "vue-router";
import main from "./views/main";
import write from "./views/write";
import login from "./views/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "main",
      component: main
    },
    {
      path: "/write",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: write
        // import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: '/login',
      name: "login",
      component: login
    }
  ],
  mode: "history"
});
