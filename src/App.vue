<template>
  <div class="app">
    
    <!-- <menu-bar/>
    <content-box/> -->
<!--     <login/>
    <sign-up/> -->
    <Header style="display: none;"></Header>
    <div class="sidebar">
      <Sidebar/>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/MainHeaderComp.vue'
import Footer from './components/MainFooterComp.vue'
import Sidebar from './components/MainSidebarComp.vue'

export default {
  name: 'App',
  components: {
    /* MenuBar, ContentBox,  */
    /* Login, SignUp */
    Header, Footer, Sidebar
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