<template>
  <table>
    <tr>
      <td class="title"><slot name="roomTitle"></slot></td>
      <td class="num-people">인원 <slot name="numPeople"></slot></td>
    </tr>
    <tr>
      <td class="location">위치: <slot name="location"></slot></td>
      <td class="num-price">금액: <slot name="price"></slot></td>
    </tr>
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
table {
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
  border: 1px solid;
  border-collapse: separate;
  border-radius: 20px;
  background: #55cc55;
}
table:nth-last-child(1) {
  margin-bottom: 20px;
}
td {
  padding: 10px;
}
.title {
  text-align: left;
}
.num-people {
  text-align: right;
}
.location {
  text-align: left;
}
.num-price {
  text-align: right;
}
</style>