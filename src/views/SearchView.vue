<template>
  <div class="searchBg">
    <b-input-group class="mt-3">
        <b-form-input v-model="searchFor"></b-form-input>
        <b-input-group-append>
        <b-button variant="info" @click="search">검색</b-button>
        </b-input-group-append>
    </b-input-group>

    <div class="searchResult">
      <b-card style="width: 32%; display: inline-block; margin: 2px" 
        v-for="result in searchResult" :key="result">

        <b-card-text>{{result.title}}</b-card-text>
        <b-card-footer>{{result.content}}</b-card-footer>
        <b-button @click="$router.push(`/board/${result.id}`)">구매하러가기</b-button>
      </b-card>
    </div>
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
.searchBg{
    width: 1080px;
    margin: auto;
    border-radius: 8px;
    margin-top: 30px;
    margin-bottom: 30px;
}
.searchInput{
    width: 100%;
}
.searchResult{
  margin-top: 30px;
}
</style>