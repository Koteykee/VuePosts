<template>
  <nav class="nav">
    <h1 @click="goHomePage">Posts Home Page</h1>
    <Search v-if="route.path === '/'" />
    <h2>Random Post</h2>
  </nav>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import Search from "./Search.vue";

const route = useRoute();
const router = useRouter();
function goHomePage() {
  router.push("/");
}
</script>

<style scoped>
.nav {
  width: 100%;
  height: 60px;
  background: #32d7ed;
  background: linear-gradient(
    150deg,
    rgba(50, 215, 237, 1) 0%,
    rgba(95, 131, 199, 1) 60%
  );
  border-bottom: 2px solid #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

h1 {
  font-size: 24px;
  padding-left: 10px;
  cursor: pointer;
  background: none;
}

h2 {
  font-size: 24px;
  padding-right: 10px;
  cursor: pointer;
  background: none;
}
</style>
