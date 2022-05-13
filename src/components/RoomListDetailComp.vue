<template>
    <b-modal id="roomDetailModal" hide-footer size="xl" :title="roomDetail.title">
      <div class="roomDetailLeft">
          <h3 style="margin-bottom: 30px">{{roomDetail.location}}</h3>
          <b-button id="menuSelect" @click="openMenu">메뉴선택</b-button>
          <h3 style="margin-top: 30px">주문 금액: 0원</h3>
      </div>
      <div class="roomDetailRight">
          <table class="userTable">
              <tr :key="key" v-for="(user, key) in roomDetail.userState">
                  <td id="userName">
                    {{user.userName}}
                    <b-button variant="danger">x</b-button>
                  </td>
                  <td id="userState">
                      <p v-if="user.ordered">O</p>
                      <p v-else>X</p>
                  </td>
              </tr>
          </table>
      </div>
      <div class="orderButton">
          <b-button @click="order()">주문하기</b-button>
      </div>
      <room-list-menu-comp-vue></room-list-menu-comp-vue>
    </b-modal>
</template>

<script>
import roomDetail from "../json/roomDetail.json"
<<<<<<< HEAD
import axios from 'axios'
=======
import RoomListMenuCompVue from "./RoomListMenuComp.vue";

>>>>>>> skwogus-RoomList
export default {
  name: "RoomListDetailComp",
  props:['roomId'],
  components: {
    RoomListMenuCompVue
  },
  data() {
    return {
      roomDetail: roomDetail,
    };
  },
  methods: {
    enterRoom(room) {
      alert(room.title);
    },
    order(){
<<<<<<< HEAD
      let data = {
        money: "5000",
        id: 1
      }
      axios.post("http://202.31.200.215:8080/kakaoPay", data)
      .then((res)=>{
        alert(res.data)
        window.location.replace(res.data);
      })
      .catch((err)=>{
        console.log(err)
      })
=======
      alert(this.roomId)
    },
    openMenu(){
      this.$bvModal.show("MenuModal")
>>>>>>> skwogus-RoomList
    }
  },
};
</script>

<style>
.roomDetailLeft{
    width: 70%;
    float: left;
    margin-bottom: 5em;
}
.roomDetailRight{
    width: 20%;
    float: right;
}
.userTable tr{
    height: 45px;
}
.orderButton{
    width: 100%;
    position:absolute;
    bottom: 0px;
    text-align: center;
    margin-bottom: 1em;
    
}
#userName{
    width: 95%;
}
#menuSelect{

  margin-bottom: 20%;
}
</style>