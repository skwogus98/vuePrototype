<template>
  <div class="sidebar">
    <b-sidebar id="sidebar-1" title="Sidebar" shadow>
      <div class="logo"><img src="../assets/premium-icon-food-5134814.png" style="width:100px" @click="$router.push('main')"/></div>
      <div class="roomlistButton"><b-button @click="$router.push('roomlist')">방 찾기</b-button></div>
      <div class="sidebarFooter">
        <div class="roomlistButton"><b-button @click="$router.push('login')">로그인</b-button></div>
        <div class="roomlistButton"><b-button @click="$router.push('register')">회원가입</b-button></div>
        <div class="sidebarInfo"><h3>phone 010-5044-5388</h3></div>
      </div>
    </b-sidebar>
  </div>
</template>

<style>
.sidebar{
    background: #80cae3;
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
  background: gray;
  height: 5em;
}
</style>