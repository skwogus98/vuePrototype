<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
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
