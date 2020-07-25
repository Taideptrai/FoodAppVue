import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signin from "../views/Signin.vue";
import Join from "../views/Join.vue";
import Menu from "../views/Menu.vue";
import Recipe from "../views/Recipe.vue";
import store from "../store/index.js";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Signin",
    name: "signin",
    component: Signin
  },
  {
    path: "/Join",
    name: "join",
    component: Join
  },
  {
    path: "/Menu",
    name: "menu",
    component: Menu
  },
  {
    path: "/Recipe",
    name: "recipe",
    component: Recipe,
    meta: {
      authRequired: true
    }
  },
  
  
];


const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
      if (!store.state.user) {
          next({
              path: '/signin'
          });
      } else {
          next();
      }
  } else {
      next();
  }
});

export default router;



