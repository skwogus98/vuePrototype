<template>
  <div class="searchBg">
    <h1>메인화면</h1>
    <img src="../assets/main.jpg" style="object-fit: cover" />
  </div>
</template>

<script>
import searchResult from "../json/searchResult.json";

export default {
  name: "Search",
  data() {
    return {
      searchResult: searchResult,
      searchFor: "" /* 검색 창 */,
    };
  },
  methods: {
    search() {
      alert(this.searchFor);
    },
    goBoard(boardId) {
      boardId;
    },
  },
};
</script>

<style></style>
