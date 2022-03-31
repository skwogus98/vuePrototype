<template>
  <div class="menu">
    <a v-for="temp in menu" :key="temp">{{temp}}</a>
    <h1>{{msg}}</h1>
  
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data(){
    return{
      menu: ["메뉴1","메뉴2","메뉴3"]
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 15px;
  margin-top: 60px;
}
.menu a{
  color: white;
  padding: 10px;
}
</style>
