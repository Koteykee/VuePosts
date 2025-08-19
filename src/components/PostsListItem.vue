<template>
  <div class="post" @click="goPost(post.id)">
    <h3>{{ post.title }}</h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

function goPost(id) {
  router.push(`/posts/${id}`);
}
</script>

<style scoped>
.post {
  cursor: pointer;
  background-color: rgb(93, 193, 218);
  padding: 6px;
  border: 2px solid rgb(43, 81, 153);
}
</style>
