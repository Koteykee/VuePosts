<template>
  <div class="comment">
    <div class="commentContainer">
      <p class="commentName">{{ comment.name }}</p>
      <p class="commentEmail">{{ comment.email }}</p>
    </div>
    <hr />
    <p class="commentBody">{{ comment.body }}</p>
  </div>
</template>

<script setup>
const { comment } = defineProps({
  comment: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.comment {
  background-color: rgb(96, 151, 214);
  padding: 10px;
  border: 2px solid rgb(43, 81, 153);
  border-radius: 10px;
  width: 100%;
}

.commentContainer {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.commentName {
  font-weight: 700;
}

.commentEmail {
  text-decoration: underline;
}

hr {
  margin-bottom: 4px;
  border-color: rgb(43, 81, 153);
}
</style>
