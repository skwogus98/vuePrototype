<template>
  <div :key="key" v-for="(room, key) in roomData">
    <room-list-room-comp @click="enterRoom(room)">
      <template #roomTitle> {{ room.title }}</template>
      <template #numPeople>
        {{ room.currentPerson }}/{{ room.maxPerson }}
      </template>
      <template #location> {{ room.location }} </template>
      <template #price> {{ room.fundedPrice }}/{{ room.price }} </template>
    </room-list-room-comp>
  </div>
  <room-list-detail-comp :roomId="roomId"/>
</template>

<script>
import RoomListDetailComp from '../components/RoomListDetailComp.vue';
import RoomListRoomComp from "../components/RoomListRoomComp.vue";
import roomList from "../json/roomList.json";

export default {
  name: "RoomListView",
  components: {
    RoomListRoomComp,
    RoomListDetailComp
  },
  data() {
    return {
      roomData: roomList,
      roomId: 0
    };
  },
  methods: {
    enterRoom(room) {
      this.$bvModal.show('roomDetailModal')
      this.roomId = room.Id
      alert(this.room)
    },
  },
};
</script>

<style scoped>
.content {
  background: white;
  padding: 15px;
  border-radius: 15px;
}
.content a {
  color: black;
  padding: 10px;
}
</style>