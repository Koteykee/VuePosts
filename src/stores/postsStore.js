import { ref } from "vue";
import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", () => {
  const searchQuery = ref("");

  return { searchQuery };
});
