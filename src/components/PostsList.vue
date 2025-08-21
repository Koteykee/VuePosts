<template>
  <p v-if="filteredPosts.length === 0" class="resultText">
    No results match your query, try a different term.
  </p>
  <ul v-else class="postList">
    <li v-for="post in filteredPosts" :key="post.id">
      <PostsListItem :post="post" />
    </li>
  </ul>
  <button class="btn" @click="loadMore">Load more</button>
</template>

<script setup>
import { usePostsStore } from "@/stores/postsStore";
import PostsListItem from "./PostsListItem.vue";
import axios from "axios";
import { computed, ref } from "vue";

const postsStore = usePostsStore();

const posts = ref([]);
const page = ref(1);
const postLimit = ref(5);
const getPosts = async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page.value}&_limit=${postLimit.value}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

posts.value = await getPosts();

const filteredPosts = computed(() => {
  if (postsStore.searchQuery.trim() === "") {
    return posts.value;
  } else {
    const query = postsStore.searchQuery.toLowerCase();
    return posts.value.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.body.toLowerCase().includes(query)
    );
  }
});

async function loadMore() {
  page.value++;
  const addPosts = await getPosts();
  posts.value.push(...addPosts);
  console.log(posts.length);
}
</script>

<style scoped>
.postList {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
}

.btn {
  width: 100%;
  padding: 6px;
  border-color: rgb(43, 81, 153);
  border-radius: 10px;
  background-color: rgb(128, 122, 207);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
}

.btn:hover {
  background-color: rgb(151, 144, 247);
}

.resultText {
  font-size: 20px;
  text-align: center;
  margin: 20px auto;
}
</style>
