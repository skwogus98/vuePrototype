<template>
  <div class="content">
    <div v-for="temp in search" :key="temp">
      {{ temp }}
    </div>
  </div>
</template>

<script>
export default {
  name: "RoomListView",
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
