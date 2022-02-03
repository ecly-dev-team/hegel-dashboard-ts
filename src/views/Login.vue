<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { HOST_ADDRESS } from "@/api";
import store from "@/store";
import router from "@/router";

const username = ref("");
const password = ref("");
const errorMessage = ref("");

async function submit() {
  try {
    const res = await axios.post(HOST_ADDRESS + "/auth/login", {
      username: username.value,
      password: password.value,
    });
    store.loginUser(res.data);
    router.push({ name: "Home" });
  } catch (e) {
    console.log(e);
    errorMessage.value = "Username or password not correct.";
  }
}
</script>

<template>
  <form @submit.prevent="submit">
    <label>name or email</label>
    <input type="text" v-model="username" />
    <label>password</label>
    <input type="password" v-model="password" />
    <button>submit</button>
  </form>
  <div v-if="errorMessage">
    {{ errorMessage }}
  </div>
  <router-link :to="{ name: 'Register' }"
    >don't have an account? register</router-link
  >
</template>
