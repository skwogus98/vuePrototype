<template>
  <div class="sidebar">
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="logo">
        <img
          src="../assets/premium-icon-food-5134814.png"
          style="width: 100px"
          @click="$router.push('main')"
        />
      </div>
      <div class="roomlistButton">
        <b-button @click="goRoomList">방 찾기</b-button>
      </div>
      <div class="roomlistButton" v-if="!isLogin">
        <b-button @click="$router.push('createroom')">방 만들기</b-button>
      </div>
      <div class="sidebarFooter">
        <div class="roomlistButton" v-if="isLogin">
          <b-button @click="$router.push('login')">로그인</b-button>
        </div>
        <div class="roomlistButton" v-if="isLogin">
          <b-button @click="$router.push('register')">회원가입</b-button>
        </div>
        <div class="sidebarInfo"><h3>phone 010-5044-5388</h3></div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "AppSidebarComp",
  components: {},
  data() {
    return {};
  },
  methods: {
    //페이지 이동시 모달창이 삭제되지 않고 남아있어 페이지 리로드를 하여 이 부분을 삭제함
    async goRoomList() {
      await this.$router.push("roomlist");
      window.location.reload();
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.login;
    },
  },
};
</script>

<style>
.sidebar {
  background: #80cae3;
}
.logo {
  width: 100%;
  margin-bottom: 13px;
  margin-top: 20px;
  padding-left: 0px;
}
.sidebarFooter {
  width: 100%;
  bottom: 0px;
  position: absolute;
  height: 12em;
}
.roomlistButton button {
  width: 240px;
  height: 2.5em;
}
.roomlistButton {
  margin-top: 1em;
  margin-bottom: 1em;
}
.sidebarInfo {
  background: gray;
  height: 5em;
}
</style>
