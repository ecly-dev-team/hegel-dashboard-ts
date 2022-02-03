import store from "@/store";
import Login from "@/views/Login.vue";
import Post from "@/views/Post.vue";
import Register from "@/views/Register.vue";
import User from "@/views/User.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
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
  {
    path: "/user",
    name: "User",
    component: User,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if ((to.name === "Login" || to.name === "Register") && store.loggedIn()) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
