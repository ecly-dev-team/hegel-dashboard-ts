<script setup lang="ts">
import { HOST_ADDRESS } from "@/api";
import { User } from "@/store/interface/user.interface";
import axios from "axios";
import { Ref, ref } from "vue";

const userList: Ref<null | Array<User>> = ref(null);

axios.get(HOST_ADDRESS + "/users").then((res) => {
  userList.value = res.data;
});
</script>

<template>
  <div>
    <h2>user list</h2>
    <ul>
      <li v-for="user in userList" :key="user.id">{{ user }}</li>
    </ul>
  </div>
</template>
