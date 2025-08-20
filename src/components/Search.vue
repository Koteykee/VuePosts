<template>
  <input
    type="text"
    class="search"
    placeholder="Search for a post"
    v-model="postsStore.searchQuery"
  />
</template>

<script setup>
import { usePostsStore } from "@/stores/postsStore";

const postsStore = usePostsStore();
</script>

<style scoped>
.search {
  width: 30%;
  padding: 4px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
