<template>
  <div :key="key" v-for="(room, key) in roomData">
    <table class="roomListTable">
    <td @click="enterRoom(room)">
      <room-list-room-comp>
        <template #roomTitle> {{ room.title }}</template>
        <template #numPeople>
          {{ room.currentPerson }}/{{ room.maxPerson }}
        </template>
        <template #location> {{ room.location }} </template>
        <template #price> {{ room.fundedPrice }}/{{ room.price }} </template>
      </room-list-room-comp>
    </td>
    <td id="showMapTd">
      <b-button variant="outline-info" @click="openMapModal">
        🗺️
      </b-button>
    </td>
    </table>
  </div>
  <room-list-detail-comp :roomId="roomId"/>
  <b-modal id="MapModal" hide-footer title="위치">
    <kakao-map-comp-vue ref="createMap"></kakao-map-comp-vue>
  </b-modal>
</template>

<script>
import RoomListDetailComp from '../components/RoomListDetailComp.vue';
import RoomListRoomComp from "../components/RoomListRoomComp.vue";
import KakaoMapCompVue from '../components/KakaoMapComp.vue';
import roomList from "../json/roomList.json";

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
      roomId: 1
    };
  },
  methods: {
    enterRoom(room) {
      this.$bvModal.show('roomDetailModal')
      this.roomId = Number(room.id)
      //console.log(this.roomId)
    },
    async openMapModal(){
      await this.$bvModal.show('MapModal')
      //this.$refs.createMap.changeMap()
    }
  },
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
  margin-bottom: 1em;
}
</style>