<template>
  <main>
    <Suspense>
      <Post />
    </Suspense>
    <Suspense>
      <CommentsList />
    </Suspense>
  </main>
</template>

<script setup>
import { Suspense } from "vue";
import Post from "@/components/Post.vue";
import CommentsList from "@/components/CommentsList.vue";
</script>

<style scoped></style>
