<template>
  <div class="app">
    <AppHeaderComp style="display: none"></AppHeaderComp>
    <div class="sidebar">
      <AppSidebarComp />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <AppFooterComp style="display: none"></AppFooterComp>
  </div>
</template>

<script>
import AppHeaderComp from "./components/AppHeaderComp.vue";
import AppFooterComp from "./components/AppFooterComp.vue";
import AppSidebarComp from "./components/AppSidebarComp.vue";

export default {
  name: "App",
  components: {
    /* MenuBar, ContentBox,  */
    /* Login, SignUp */
    AppHeaderComp,
    AppFooterComp,
    AppSidebarComp,
  },
  data() {
    return {
      loginState: false,
      id: null,
    };
  },
  methods: {
    asdf: function () {
      this.loginState;
      typeof this.loginState;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(190, 190, 190);
}
.content {
  float: right;
  box-sizing: border-box;
}
.sidebar {
  width: 280px;
  float: left;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
