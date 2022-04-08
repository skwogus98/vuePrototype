<template>
  <app-header-comp></app-header-comp>
  <router-view></router-view>
  <app-footer-comp></app-footer-comp>
</template>

<script>
import AppFooterComp from "./components/AppFooterComp.vue";
import AppHeaderComp from "./components/AppHeaderComp.vue";
export default {
  name: "App",
  components: { AppHeaderComp, AppFooterComp },
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
