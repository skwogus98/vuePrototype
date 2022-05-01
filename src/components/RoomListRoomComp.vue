<template>
  <table class="roomListTable">
    <td>
      <table>
        <tr class="title">
          <slot name="roomTitle"></slot>
        </tr>
      </table>
      <table class="roomDetailTable">
        <tr>
        <table>
          <td class="num-price">💰 <slot name="price"></slot></td>
          <td class="location">🚩 <slot name="location"></slot></td>
        </table>
      </tr>
      </table>
    </td>
    <td id="showMapTd">
      <b-button variant="outline-info">
        🗺️
      </b-button>
    </td>
  </table>
</template>

<script>
export default {
  name: "RoomListRoomComp",
  components: {},
  data() {
    return {
      title: "",
      numPeople: "",
      numPeopleMax: "",
      location: "",
      currentPrice: "",
      needPrice: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
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
.roomListTable:nth-last-child(1) {
  margin-bottom: 0.5em;
}
td {
  padding-left: 0.8em;
  padding-right: 0.8em;
}
.title {
  text-align: left;
  font-size: 2.7em;
}
.num-people {
  text-align: right;
}
.location {
  text-align: right;
}
.num-price {
  text-align: left;
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
table{
  width: 100%;
  border: 0px;
}
.roomDetailTable{
  margin-top: 0.8em;
}
</style>