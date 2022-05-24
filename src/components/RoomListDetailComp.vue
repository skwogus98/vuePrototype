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
              <b-badge variant="success" pill>{{ menu["menuCount"] }}</b-badge>
            </b-list-group-item>
          </b-list-group-item>
        </b-list-group>
      </div>
      <b-button id="menuSelect" @click="openMenu(selectedMenu[0]['menu'])"
        >메뉴선택</b-button
      >
      <img src="../assets/chatting.png" style="float: right" />
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
      </table>
    </div>
    <div class="orderButton">
      <b-button @click="order()">주문하기</b-button>
    </div>
    <room-list-menu-comp-vue ref="menuModal"></room-list-menu-comp-vue>
  </b-modal>
</template>

<script>
import roomDetail from "../json/roomDetail.json";
import RoomListMenuCompVue from "./RoomListMenuComp.vue";

export default {
  name: "RoomListDetailComp",
  props: ["roomId"],
  components: {
    RoomListMenuCompVue,
  },
  data() {
    return {
      roomDetail: roomDetail,
      selectedMenu: [
        {
          userName: "나재현",
          menu: [
            {
              menuName: "아메리카노",
              price: 2000,
              menuCount: 2,
            },
            {
              menuName: "크로플",
              price: 3500,
              menuCount: 3,
            },
          ],
        },
        {
          userName: "이종렬",
          menu: [
            {
              menuName: "아이스티",
              price: 1500,
              menuCount: 1,
            },
            {
              menuName: "청포도 에이드",
              price: 2500,
              menuCount: 2,
            },
            {
              menuName: "딸기 케이크",
              price: 6000,
              menuCount: 4,
            },
          ],
        },
        {
          userName: "이종렬",
          menu: [
            {
              menuName: "아이스티",
              price: 1500,
              menuCount: 1,
            },
            {
              menuName: "청포도 에이드",
              price: 2500,
              menuCount: 2,
            },
            {
              menuName: "딸기 케이크",
              price: 6000,
              menuCount: 4,
            },
          ],
        },
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
  float: right;
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
</style>
