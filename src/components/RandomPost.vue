<template>
  <router-link :to="`/posts/${random}`">
    <h2 class="randomPost">Random Post</h2>
  </router-link>
</template>

<script setup>
import { ref } from "vue";

const random = ref(Math.floor(Math.random() * 100) + 1);
</script>

<style scoped>
.randomPost {
  font-size: 24px;
  padding-right: 10px;
  cursor: pointer;
}
</style>
