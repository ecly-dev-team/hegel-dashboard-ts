<script setup lang="ts">
import { HOST_ADDRESS } from "@/api";
import router from "@/router";
import axios from "axios";
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const passwordRep = ref("");
const errorMessage = ref("");

function submit() {
  if (password.value !== passwordRep.value) {
    errorMessage.value = "not same";
    return;
  }
  axios
    .post(HOST_ADDRESS + "/users/register", {
      name: name.value,
      email: email.value,
      password: password.value,
    })
    .then((res) => {
      console.log(res);
      router.push({ name: "Login" });
    })
    .catch((e) => {
      errorMessage.value = e;
    });
}
</script>

<template>
  <form @submit.prevent="submit">
    <label>name</label>
    <input type="text" v-model="name" />
    <label>email</label>
    <input type="email" v-model="email" />
    <label>password</label>
    <input type="password" v-model="password" />
    <label>confirm password</label>
    <input type="password" v-model="passwordRep" />
    <button>submit</button>
  </form>
  <div>{{ errorMessage }}</div>
  <router-link :to="{ name: 'Login' }"
    >already have an account? login</router-link
  >
</template>
