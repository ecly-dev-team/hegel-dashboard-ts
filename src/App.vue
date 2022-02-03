<script setup lang="ts">
import axios from "axios";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { HOST_ADDRESS } from "./api";
import store from "./store";
import { User } from "./store/interface/user.interface";

const router = useRouter();

const userString = localStorage.getItem("user");
if (userString) {
  const user: User = JSON.parse(userString);
  axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
  axios
    .get(HOST_ADDRESS + "/auth/verify")
    .then(() => {
      store.loginUser(user);
    })
    .catch((e) => {
      console.log(e);
      store.logoutUser();
      router.push({ name: "Login" });
    });
} else {
  router.push({ name: "Login" });
}

const getUser = computed(() => {
  return store.getUser();
});

function logout() {
  store.logoutUser();
}
</script>

<template>
  <div id="nav" v-if="store.loggedIn()">
    <router-link :to="{ name: 'Home' }">Home</router-link>|
    <router-link :to="{ name: 'Post' }">Post</router-link>|
    <router-link :to="{ name: 'User' }">User</router-link>
    <button @click="logout">Logout</button>
  </div>
  <div v-if="store.loggedIn()">Welcome, {{ getUser.value?.name }}</div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
