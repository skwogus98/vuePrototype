<template>
  <div class="main">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "MainView",
  components:{
  },
  data() {
    return{
    }
  },
  mounted(){
    console.log("mounted 실행")
    let token = this.$route.query.pg_token
    if(token != null){
      console.log(token)
      axios.post(this.HOST + "/kakaoPaySuccess", token).then(res=>{
        console.log(res)
        this.$store.commit("chargeCash", res.data)
        this.$router.push('/kakaoPaysuccess')
      })
    }
  }
}
</script>

<style>

</style>