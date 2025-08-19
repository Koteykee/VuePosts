<template>
  <Suspense>
    <Post />
  </Suspense>
  <Suspense>
    <CommentsList />
  </Suspense>
</template>

<script setup>
import { Suspense } from "vue";
import Post from "@/components/Post.vue";
import CommentsList from "@/components/CommentsList.vue";
</script>

<style scoped></style>
