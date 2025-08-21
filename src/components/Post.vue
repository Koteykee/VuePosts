<template>
  <div class="post">
    <h3 class="postTitle">{{ postTitle }}</h3>
    <p class="postBody">{{ postBody }}.</p>
    <div class="likeContainer">
      <img :src="likeIcon" alt="Like icon" class="like" @click="liked" />
      <p class="likeText">Likes: {{ likeCounter }}</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { capitalize } from "@/functions/capitalize";
import { ref } from "vue";

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

const likeIcon = ref("/assets/img/like.svg");
const isLiked = ref(false);
const likeCounter = ref(0);

function liked() {
  isLiked.value = !isLiked.value;
  if (isLiked.value) {
    likeIcon.value = "/assets/img/liked.svg";
    likeCounter.value++;
  } else {
    likeIcon.value = "/assets/img/like.svg";
    likeCounter.value--;
  }
  return;
}
</script>

<style scoped>
.post {
  background-color: rgb(93, 193, 218);
  padding: 16px;
  border: 2px solid rgb(43, 81, 153);
  margin: 30px auto;
}
.postTitle {
  text-align: center;
  font-size: 26px;
  margin-bottom: 20px;
}

.postBody {
  font-size: 22px;
}

.likeContainer {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.like {
  width: 36px;
  height: auto;
  cursor: pointer;
}

.like:hover {
  transform: scale(1.2);
}

.likeText {
  margin-left: 8px;
  font-size: 20px;
}
</style>
