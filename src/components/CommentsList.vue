<template>
  <div>
    <p class="commentsCounter">Comments: {{ comments.length }}</p>
    <ul class="commentsList">
      <li v-for="comment in comments">
        <Comment :comment="comment" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Comment from "./Comment.vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const postId = route.params.id;
const getComments = async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const comments = await getComments();
</script>

<style scoped>
.commentsList {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}

.commentsCounter {
  text-align: end;
  margin-right: 4px;
}

li {
  width: 100%;
}
</style>
