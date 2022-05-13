<template>
  <div class="sidebar">
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <!-- <div class="logo"><img src="../assets/premium-icon-food-5134814.png" style="width:100px" @click="$router.push('main')"/></div> -->
      <div class="roomlistButton"><b-button @click="goRoomList" variant="outline-success">방 찾기</b-button></div>
      <div class="roomlistButton"><b-button @click="$router.push('createroom')" variant="outline-success">방 만들기</b-button></div>
      <div class="sidebarFooter">
        <div class="roomlistButton"><b-button @click="$router.push('login')" variant="outline-success">로그인</b-button></div>
        <div class="roomlistButton"><b-button @click="$router.push('register')" variant="outline-success">회원가입</b-button></div>
        <div class="sidebarInfo"><h3>info</h3></div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "AppSidebarComp",
  components: {},
  data() {
    return {

    };
  },
  methods: {
    //페이지 이동시 모달창이 삭제되지 않고 남아있어 페이지 리로드를 하여 이 부분을 삭제함
    async goRoomList(){
      await this.$router.push('roomlist')
      window.location.reload()
    }
  },
};
</script>

<style>
.sidebar{
    background: #bdecb6;
    box-shadow: 1px 0px 6px 1px gray;
}
.logo{
  width: 100%;
  margin-bottom: 13px;
  margin-top: 20px;
  padding-left: 0px;
}
.sidebarFooter{
  width: 100%;
  bottom:0px;
  position: absolute;
  height: 12em;
}
.roomlistButton button{
  width: 240px;
  height: 2.5em;
}
.roomlistButton{
  margin-top: 1em;
  margin-bottom: 1em;
}
.sidebarInfo{
  background: rgba(256,256,256,0.4);
  height: 5em;
  color: rgba(200, 200, 200, 0.8)
}
</style>