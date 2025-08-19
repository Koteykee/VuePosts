<template>
  <div class="post">
    <h3 class="postTitle">{{ postTitle }}</h3>
    <p class="postBody">{{ postBody }}.</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { capitalize } from "@/functions/capitalize";

const route = useRoute();

const postId = route.params.id;

const getPost = async () => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const post = await getPost();
const postTitle = capitalize(post.title);
const postBody = capitalize(post.body);
</script>

<style scoped>
.post {
  background-color: rgb(93, 193, 218);
  padding: 16px;
  border: 2px solid rgb(43, 81, 153);
  margin: 30px auto;
  width: 50%;
}
.postTitle {
  text-align: center;
  font-size: 26px;
  margin-bottom: 20px;
}

.postBody {
  font-size: 22px;
}
</style>
