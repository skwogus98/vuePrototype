<template>
  <div class="searchBg">
    asdfasdf<br><br><br><br><br><br>
    asdfasdf<br><br><br><br><br><br>
    asdfasdf<br><br><br><br><br><br>
    asdfasdf<br><br><br><br><br><br>
    asdfasdf<br><br><br><br><br><br>
    asdfasdf<br><br><br><br><br><br>
    
  </div>
</template>

<script>
import searchResult from "../json/searchResult.json"

export default {
  name: "Search",
  data() {
    return {
      searchResult: searchResult,
      searchFor: "" /* 검색 창 */,
    }
  },
  methods:{
    search(){
      alert(this.searchFor)
    },
    goBoard(boardId){
      boardId
    }
  }
}
</script>

<style>

</style>