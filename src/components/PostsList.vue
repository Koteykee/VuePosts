<template>
  <ul class="postList">
    <li v-for="post in posts">
      <PostsListItem :post="post" />
    </li>
  </ul>
</template>

<script setup>
import PostsListItem from "./PostsListItem.vue";
import axios from "axios";

const getPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const posts = await getPosts();
</script>

<style scoped>
.postList {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}
</style>
