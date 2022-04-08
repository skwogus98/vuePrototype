<template>
  <div :key="key" v-for="(key, i) in search">
    <room-list-room-comp>{{ i }}</room-list-room-comp>
  </div>
</template>

<script>
import RoomListRoomComp from "../components/RoomListRoomComp.vue";

export default {
  name: "RoomListView",
  components: {
    RoomListRoomComp,
  },
  data() {
    return {
      search: ["메뉴1", "메뉴2", "메뉴3"],
    };
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
