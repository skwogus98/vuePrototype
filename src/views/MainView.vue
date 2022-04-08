<template>
  <h1>메인 화면</h1>
  <button>버튼</button>
  <b-button>버튼</b-button>
</template>

<script>
import searchResult from "../json/searchResult.json";

export default {
  name: "MainView",
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

<style>
.searchBg {
  width: 1080px;
  margin: auto;
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.searchInput {
  width: 100%;
}
.searchResult {
  margin-top: 30px;
}
</style>
