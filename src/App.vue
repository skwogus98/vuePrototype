<template>
  <div class="app">
    <b-button id="sidebar-hide" @click="sidebarOn = !sidebarOn" v-if="sidebarOn"
      >&lt;</b-button
    >
    <b-button id="sidebar-show" @click="sidebarOn = !sidebarOn" v-else
      >&gt;</b-button
    >
    <div class="sidebar" v-if="sidebarOn">
      <AppSidebarComp />
    </div>
    <div class="content" v-if="sidebarOn">
      <router-view></router-view>
    </div>
    <div class="content-no-sidebar" v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppSidebarComp from "./components/AppSidebarComp.vue";

export default {
  name: "App",
  components: {
    AppSidebarComp,
  },
  data() {
    return {
      sidebarOn: true,
    };
  },
  methods: {},
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(190, 190, 190);
  margin-top: 0px;
}
.sidebar {
  width: 320px;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  height: 100%;
}
.content {
  margin-left: 320px;
}
.content-no-sidebar {
  margin-left: 0px;
}
#sidebar-show {
  position: fixed;
  top: calc(50% - 20px);
  left: 0px;
}
#sidebar-hide {
  position: fixed;
  top: calc(50% - 20px);
  left: 320px;
}
</style>
