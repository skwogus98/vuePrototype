<template>
  <div class="searchBox">
    <b-form-input v-model="searchText"/>
    <b-button variant="success" >검색</b-button>
    <button style="width:100%;font-size: 1em;height: fit-content;border: 0px;text-align: left;" v-b-toggle:locationOption>▷ 지역별 검색</button>
    <b-collapse id="locationOption">
      <b-form-select v-model="state" :options="stateData"></b-form-select>
      <b-form-select v-model="city" :options="cityData"></b-form-select>
      <b-form-select v-model="full_addr" :options="villageData"></b-form-select>
    </b-collapse>
  </div>
  <div :key="key" v-for="(room, key) in roomData">
    <table class="roomListTable">
    <td @click="enterRoom(room)">
      <room-list-room-comp>
        <!-- <template #roomTitle> {{ room.title }}</template>
        <template #numPeople>
          {{ room.currentPerson }}/{{ room.maxPerson }}
        </template>
        <template #location> {{ room.location }} </template>
        <template #price> {{ room.fundedPrice }}/{{ room.price }} </template> -->
        <!-- =======================테스트====================== -->
        <template #roomTitle> {{ room.title }}</template>
        <template #numPeople>
          {{ room.currNumOfPeople }}/{{ room.maximumPeople }}
        </template>
        <template #location> {{ room.gatheringPlace }} </template>
        <template #price> {{ room.currentAmount }}/{{ room.minimumOrderAmount }} </template>
      </room-list-room-comp>
    </td>
    <td id="showMapTd">
      <b-button variant="outline-info" @click="openMapModal('제주특별자치도 제주시 첨단로 242')"><!-- room.location 사용해야함 -->
        🗺️
      </b-button>
    </td>
    </table>
  </div>
  <b-button @click="getRoomList" v-if="showMoreBtn">더보기</b-button>
  <room-list-detail-comp :roomId="roomId" ref="detailRoom"/>
  <b-modal id="MapModal" hide-footer title="위치">
    <kakao-map-comp-vue ref="createMap"></kakao-map-comp-vue>
  </b-modal>
</template>

<script>
import RoomListDetailComp from '../components/RoomListDetailComp.vue';
import RoomListRoomComp from "../components/RoomListRoomComp.vue";
import KakaoMapCompVue from '../components/KakaoMapComp.vue';
import roomList from "../json/roomList.json";
import axios from 'axios';

export default {
  name: "RoomListView",
  components: {
    RoomListRoomComp,
    RoomListDetailComp,
    KakaoMapCompVue
  },
  data() {
    return {
      roomData: roomList,
      roomId: 1,
      roomLimit: 0,
      showMoreBtn: true,
      searchText:"",
      stateData:[
        {value: null, text:'시/도'}
      ],
      cityData:[
        {value: null, text:'시/군/구'}
      ],
      villageData:[
        {value: null, text:'읍/면/동'}
      ],
      state:null,
      city:null,
      full_addr:null
    };
  },
  methods: {
    enterRoom(room) {
      this.$bvModal.show('roomDetailModal')
      this.roomId = Number(room.id)
      this.$refs.detailRoom.onConnectSocket()
      //console.log(this.roomId)
    },
    openMapModal(addr){
      this.$bvModal.show('MapModal')
      setTimeout(() => this.$refs.createMap.changeMap(addr), 200);
    },
    getRoomList(){
      this.roomLimit += 5
      axios.get(this.HOST+"/room/" + this.roomLimit).then(res=>{
        this.roomData = res.data
        // console.log("roomLimit: " + this.roomLimit + ", length: " + res.data.length)
        if(this.roomLimit > res.data.length){
          this.showMoreBtn = false
        }
      })
    },
    getSgisAccessToken(){
      const key = "consumer_key="+process.env.VUE_APP_SGIS_CONSUMER_KEY+"&consumer_secret="+process.env.VUE_APP_SGIS_CONSUMER_SECRET
      axios.get("https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json?" + key).then(res=>{
        this.$store.commit("setSgisAccessToken", res.data.result.accessToken)
        console.log(this.$store.state.sgisAccessToken)
      })
    },
    //시,도 데이터 가져오기
    getStateData(){
      if(this.$store.state.sgisAccessToken==''){
        this.getSgisAccessToken()
      }
      else{
        var errCnt = 0;
        axios.get("https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json?accessToken=" + this.$store.state.sgisAccessToken).then(res=>{
          switch (parseInt(res.data.errCd)){
            case 0:
              this.stateData = [{value: null, text:'시/도'}]
              for (var temp of Object.entries(res.data.result)){
                var state = {text:'',value:0}
                state.text = temp[1].full_addr
                state.value = temp[1].cd
                this.stateData.push(state)
              }
            break;

            case -401:
              errCnt ++;
              if(errCnt<200){
                this.getSgisAccessToken();
              }
            break;
          }
        })
      }
    },
     getCityData(state){
      if(this.$store.state.sgisAccessToken==''){
        this.getSgisAccessToken()
      }
      else{
        var errCnt = 0;
        axios.get("https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json?accessToken=" + this.$store.state.sgisAccessToken + "&cd=" + state).then(res=>{
          switch (parseInt(res.data.errCd)){
            case 0:
              this.cityData = [{value: null, text:'시/도'}]
              for (var temp of Object.entries(res.data.result)){
                var city = {text:'',value:0}
                city.text = temp[1].addr_name
                city.value = temp[1].cd
                this.cityData.push(city)
              }
            break;

            case -401:
              errCnt ++;
              if(errCnt<200){
                this.getSgisAccessToken();
              }
            break;
          }
        })
      }
    },
    getVillageData(city){
      if(this.$store.state.sgisAccessToken==''){
        this.getSgisAccessToken()
      }
      else{
        var errCnt = 0;
        axios.get("https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json?accessToken=" + this.$store.state.sgisAccessToken + "&cd=" + city).then(res=>{
          switch (parseInt(res.data.errCd)){
            case 0:
              this.villageData = [{value: null, text:'시/도'}]
              for (var temp of Object.entries(res.data.result)){
                var village = {text:'',value:''}
                village.text = temp[1].addr_name
                village.value = temp[1].full_addr
                this.villageData.push(village)
              }
            break;

            case -401:
              errCnt ++;
              if(errCnt<200){
                this.getSgisAccessToken();
              }
            break;
          }
        })
      }
    },
  },
  mounted(){
    this.getRoomList()
    this.getStateData()
  },
  watch:{
    state:function(val){
      this.getCityData(val)
    },
    city:function(val){
      this.getVillageData(val)
    },
    full_addr:function(val){
      console.log(val)
    }
  }
};
</script>

<style scoped>
td {
  padding-left: 0.8em;
  padding-right: 0.8em;
}
table{
  width: 100%;
  border: 0px;
}
.roomListTable{
  width: 100%;
  height: 100%;
  border: 1px solid rgb(180,180,180);
  border-collapse: separate;
  border-radius: 8px;
  background-color: rgb(245, 245, 245);
  padding-top: 1.1em;
  padding-bottom: 1.1em;
  vertical-align: middle;
}
#showMapTd{
  border-left: 1px solid #444444;
  width: 15%;
  padding: 10px;
}
#showMapTd button{
  height: 100%;
  width: 2em;
  font-size: 4em;
}
.roomListTable {
  margin-top: 1em;
}
.searchBox{
  width: 100%;
  height: 5em;
  margin-bottom: 3em;
}
.searchBox input{
  width: calc(100% - 120px);
  height: 100%;
  font-size: 2em;
  float: left;
}
.searchBox button{
  width: 120px;
  height: 100%;
  font-size: 2em;
  float: left;
}
.searchBox select{
  width: calc(100% / 3);
  float: left;
}
#locationOption{
  width: 40em;
  height: 3em;
}
#locationOption select{
  margin-bottom: 1em;
}
</style>