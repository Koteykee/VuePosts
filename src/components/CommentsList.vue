<template>
  <div>
    <div class="commentsContainer">
      <p>Comments: {{ comments.length }}</p>
      <img :src="icon" alt="Arrow icon" class="icon" @click="openComments" />
    </div>
    <ul v-show="isOpen" class="commentsList">
      <li v-for="comment in comments">
        <Comment :comment="comment" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import Comment from "./Comment.vue";
import axios from "axios";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";

const isOpen = ref(false);
const icon = computed(() =>
  isOpen.value ? "/assets/img/arrow-up.svg" : "/assets/img/arrow-down.svg"
);

function openComments() {
  isOpen.value = !isOpen.value;
  return;
}

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

li {
  width: 100%;
}

.icon {
  width: 36px;
  height: auto;
  cursor: pointer;
}

.commentsContainer {
  display: flex;
  justify-content: end;
  align-items: center;
}
</style>
