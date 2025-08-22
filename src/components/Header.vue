<template>
  <nav class="nav">
    <router-link :to="`/`">
      <h1>Posts Home Page</h1>
    </router-link>
    <Search v-if="route.path === '/'" />
    <RandomPost />
  </nav>
</template>

<script setup>
import { useRoute } from "vue-router";
import Search from "./Search.vue";
import RandomPost from "./RandomPost.vue";

const route = useRoute();
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
}
</style>
