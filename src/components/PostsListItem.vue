<template>
  <div class="post" @click="goPost(post.id)">
    <h3>{{ postTitlePrew }}</h3>
    <p>{{ postBodyPrew }}...</p>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { capitalize } from "@/functions/capitalize";

const { post } = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

function goPost(id) {
  router.push(`/posts/${id}`);
}

const postBodyPrew = capitalize(post.body.slice(0, 30));
const postTitlePrew = capitalize(post.title);
</script>

<style scoped>
.post {
  cursor: pointer;
  background-color: rgb(93, 193, 218);
  padding: 6px;
  border: 2px solid rgb(43, 81, 153);
}
</style>
