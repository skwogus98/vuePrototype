<template>
  <b-modal id="roomDetailModal" hide-footer size="xl" :title="roomDetail.title">
    <div class="roomDetailLeft">
      <div class="RoomDetailPlace">
        <h3 style="margin-bottom: 30px">{{ roomDetail.location }}</h3>
      </div>
      <div class="SelectedMenuList">
        <b-list-group>
          <b-list-group-item variant="dark">주문 메뉴</b-list-group-item>
          <b-list-group-item
            variant="light"
            :key="key"
            v-for="(user, key) in selectedMenu"
          >
            <p>{{ user["userName"] }}</p>
            <b-list-group-item
              class="MenuDetail"
              variant="info"
              :key="menuNum"
              v-for="(menu, menuNum) in user['menu']"
            >
              {{ menu["menuName"] }} : {{ menu["price"] }}원
              <b-badge variant="success" pill>{{ menu["quantity"] }}</b-badge>
            </b-list-group-item>
          </b-list-group-item>
        </b-list-group>
      </div>
      <b-button id="menuSelect" @click="openMenu(selectedMenu[0]['menu'])"
        >메뉴선택</b-button
      >
      <h3 style="margin-top: 30px">주문 금액: 45,000원</h3>
    </div>
    <div class="roomDetailRight">
      <table class="userTable">
        <tr :key="key" v-for="(user, key) in roomDetail.userState">
          <td id="userName">
            {{ user.userName }}
            <b-button variant="danger">x</b-button>
          </td>
          <td id="userState">
            <p v-if="user.ordered">O</p>
            <p v-else>X</p>
          </td>
        </tr>
        <div class="chatButton">
          <b-button @click="showChatModal">
            <b-icon icon="chat-dots" size="3x"/>
          </b-button>
        </div>
      </table>
    </div>
    <div class="orderButton">
      <b-button @click="order()">주문하기</b-button>
    </div>
    <room-list-menu-comp-vue ref="menuModal"></room-list-menu-comp-vue>
    <chat-comp/>
  </b-modal>
</template>

<script>
import roomDetail from "../json/roomDetail.json";
import RoomListMenuCompVue from "./RoomListMenuComp.vue";
import ChatComp from "./ChatComp.vue"

export default {
  name: "RoomListDetailComp",
  props: ["roomId"],
  components: {
    RoomListMenuCompVue,
    ChatComp
  },
  data() {
    return {
      clientSocket: null,
      roomDetail: roomDetail,
      selectedMenu: [
        {
          userName: "나재현",
          menu: [
            {
              menuName: "아메리카노",
              price: 2000,
              quantity: 2,
            },
            {
              menuName: "크로플",
              price: 3500,
              quantity: 3,
            },
          ],
        },
        // {
        //   userName: "이종렬",
        //   menu: [
        //     {
        //       menuName: "아이스티",
        //       price: 1500,
        //       menuCount: 1,
        //     },
        //     {
        //       menuName: "청포도 에이드",
        //       price: 2500,
        //       menuCount: 2,
        //     },
        //     {
        //       menuName: "딸기 케이크",
        //       price: 6000,
        //       menuCount: 4,
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
    order() {
      alert(this.roomId);
    },
    openMenu(userMenu) {
      this.$refs.menuModal.setMenu(userMenu);
      this.$bvModal.show("MenuModal");
    },
    showChatModal(){
      this.$bvModal.show("chatModal")
    },
    onConnectSocket(){
      console.log("방 세부정보 created 출력")
    }
  },
};
</script>

<style>
.roomDetailLeft {
  width: 70%;
  float: left;
  margin-bottom: 5em;
}
.roomDetailRight {
  width: 20%;
  height: 500px;
  float: right;
  position: relative;
}
.userTable tr {
  height: 45px;
}
.orderButton {
  width: calc(100% - 32px);
  position: absolute;
  bottom: 0px;
  text-align: center;
  margin-bottom: 1em;
}
.SelectedMenuList {
  height: 400px;
  overflow: auto;
}
#userName {
  width: 95%;
}
#menuSelect {
  margin-top: 0.5em;
}
.chatButton{
  position: absolute;
  bottom: 0;
  right: 0%;
}
</style>
