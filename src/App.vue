<template>
  <div class="app">
    
    <!-- <menu-bar/>
    <content-box/> -->
<!--     <login/>
    <sign-up/> -->
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
//import MenuBar from './components/Menu.vue'
//import ContentBox from './components/Content.vue'
/* import Login from './components/Login.vue'
import SignUp from './components/SignUp.vue' */
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    /* MenuBar, ContentBox,  */
    /* Login, SignUp */
    Header, Footer
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
</style>