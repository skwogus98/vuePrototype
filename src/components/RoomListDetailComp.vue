<template>
  <b-modal
    id="roomDetailModal"
    hide-footer
    size="xl"
    :title="roomDetail.title"
    @hidden="exitRoom"
  >
    <div class="roomDetailLeft">
      <div class="RoomDetailPlace">
        <h3 style="margin-bottom: 30px">{{ roomDetail.gatheringPlace }}</h3>
      </div>
      <div class="SelectedMenuList">
        <b-list-group>
          <b-list-group-item variant="dark">주문 메뉴</b-list-group-item>
          <b-list-group-item
            variant="light"
            :key="nickname"
            v-for="(menus, nickname) in roomDetail.userMenus"
          >
            <!-- asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
            <p>{{ nickname }}</p>
            <b-list-group-item
              class="MenuDetail"
              variant="info"
              :key="menuNum"
              v-for="(menu, menuNum) in menus"
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
      <h3 style="margin-top: 30px">주문 금액: {{ roomDetail.currAmount }}원</h3>
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
            <b-icon icon="chat-dots" size="3x" />
          </b-button>
        </div>
      </table>
    </div>
    <div class="orderButton">
      <b-button @click="order()">주문하기</b-button>
    </div>
    <room-list-menu-comp-vue ref="menuModal"></room-list-menu-comp-vue>
    <room-list-chat-comp ref="chatModal" />
  </b-modal>
</template>

<script>
// import roomDetail from "../json/roomDetail.json";
import RoomListMenuCompVue from "./RoomListMenuComp.vue";
import RoomListChatComp from "./RoomListChatComp.vue";

export default {
  name: "RoomListDetailComp",
  props: ["roomId"],
  components: {
    RoomListMenuCompVue,
    RoomListChatComp,
  },
  data() {
    return {
      roomDetail: {
        roomId: "",
        title: "",
        gatheringPlace: "",
        // location: "",
        currNumOfPeople: 0,
        maximumPeople: 0,
        minimumOrderAmount: 0,
        currAmount: 0,
        createdBy: "",
        userMenus:{}
        // userState:[]
      },
      // selectedMenu: [
      // {
      //   userName: "나재현",
      //   menu: [
      //     {
      //       menuName: "아메리카노",
      //       price: 2000,
      //       quantity: 2,
      //     },
      //     {
      //       menuName: "크로플",
      //       price: 3500,
      //       quantity: 3,
      //     },
      //   ],
      // },
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
      // ],
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
    showChatModal() {
      this.$bvModal.show("chatModal");
    },
    subscribeRoom() {
      console.log("방 입장 시, 구독 함수 호출");
      this.$store.state.stompSocket.subscribe(
        "/chat/receive/" + this.roomDetail.roomId,
        (res) => {
          // 서버로부터 채팅 내용을 res에 담아서 받아옴
          // console.log(res)
          let message = JSON.parse(res.body);
          // if(message.sender !== this.$store.state.userData.userNickname)
          this.$refs.chatModal.receivedcMsg(message);
        }
      );
      this.$store.state.stompSocket.subscribe(
        "/room/" + this.roomDetail.roomId,
        (res) => {
          console.log(res);
        }
      );
    },
    setDetailRoomInfo(roomInfo) {
      console.log("방 세부정보 가져오기", roomInfo);
      this.roomDetail = roomInfo;
      // console.log("유저 메뉴", this.roomDetail.userMenus)
    },
    exitRoom() {
      console.log("exitRoom");
    },
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
.chatButton {
  position: absolute;
  bottom: 0;
  right: 0%;
}
</style>
