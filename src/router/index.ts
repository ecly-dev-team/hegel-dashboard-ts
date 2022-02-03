import store from "@/store";
import Login from "@/views/Login.vue";
import Post from "@/views/Post.vue";
import Register from "@/views/Register.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   if (to.name !== "Login" && to.name !== "Register") {
//     if (!store.loggedIn()) {
//       if (!localStorage.getItem("user")) {
//         next({ name: "Login" });
//       }
//     }
//   } else {
//     next();
//   }
// });

export default router;
