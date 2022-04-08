<template>
  <div class="app">
<<<<<<< HEAD
    <Header style="display: none;"></Header>
    <div class="sidebar">
      <Sidebar/>
=======
    <AppHeaderComp style="display: none"></AppHeaderComp>
    <div class="sidebar">
      <AppSidebarComp />
>>>>>>> 7f9f7d4 (Refactoring)
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
<<<<<<< HEAD
    <Footer style="display:none;"></Footer>
=======
    <AppFooterComp style="display: none"></AppFooterComp>
>>>>>>> 7f9f7d4 (Refactoring)
  </div>
</template>

<script>
<<<<<<< HEAD
import Header from './components/AppHeaderComp.vue'
import Footer from './components/AppFooterComp.vue'
import Sidebar from './components/AppSidebarComp.vue'
=======
import AppHeaderComp from "./components/AppHeaderComp.vue";
import AppFooterComp from "./components/AppFooterComp.vue";
import AppSidebarComp from "./components/AppSidebarComp.vue";
>>>>>>> 7f9f7d4 (Refactoring)

export default {
  name: 'App',
  components: {
    /* MenuBar, ContentBox,  */
    /* Login, SignUp */
<<<<<<< HEAD
    Header, Footer, Sidebar
=======
    AppHeaderComp,
    AppFooterComp,
    AppSidebarComp,
>>>>>>> 7f9f7d4 (Refactoring)
  },
  data() {
    return {
      loginState : false,
      id : null
    }
  },
  methods: {
    asdf: function(){
      this.loginState
      typeof(this.loginState)
    }
  }
}
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
.content{
  float: right;
  box-sizing: border-box;
}
.sidebar{
  width: 280px;
  float: left;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>