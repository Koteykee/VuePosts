<template>
  <main class="main">
    <Suspense>
      <PostsList />
    </Suspense>
  </main>
</template>

<script setup>
import PostsList from "@/components/PostsList.vue";
import { Suspense } from "vue";
</script>

<style scoped>
.main {
  width: 50%;
  margin: 0 auto;
}
</style>
