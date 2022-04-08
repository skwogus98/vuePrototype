<template>
  <table>
    <tr>
      <td class="title">방 제목</td>
      <td class="num-people">인원 3/5</td>
    </tr>
    <tr>
      <td class="location">위치: 금오공대</td>
      <td class="num-price">금액: 10000/25000</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "RoomListRoomComp",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
table {
  width: 100%;
  border: 1px solid;
  border-collapse: separate;
  border-radius: 20px;
  margin: 10px 0 0 0;
  background: #55cc55;
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
