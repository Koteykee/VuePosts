<template>
  <p v-if="filteredPosts.length === 0">
    No results match your query, try a different term.
  </p>
  <ul v-else class="postList">
    <li v-for="post in filteredPosts" :key="post.id">
      <PostsListItem :post="post" />
    </li>
  </ul>
</template>

<script setup>
import { usePostsStore } from "@/stores/postsStore";
import PostsListItem from "./PostsListItem.vue";
import axios from "axios";
import { computed } from "vue";

const postsStore = usePostsStore();

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

const filteredPosts = computed(() => {
  if (postsStore.searchQuery.trim() === "") {
    return posts;
  } else {
    const query = postsStore.searchQuery.toLowerCase();
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query)
    );
  }
});
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
