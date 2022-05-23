<template>
  <div class="MyPageBg">
    <div class="MyPageTitle">
      <h1>My Page</h1>
    </div>
    <div class="UserDataDiv">
      <b-form>
        <p>이메일</p>
        <b-form-input v-bind:value="$store.state.userData.userEmail" readonly></b-form-input>
      </b-form>
      <b-form>
        <p>닉네임</p>
        <b-form-input v-bind:value="$store.state.userData.userNickname"></b-form-input>
        <b-button>변경</b-button>
      </b-form>
      <b-form>
        <p>비밀번호 변경</p>
        <b-form-input type="password"/>
        <p style="float: left;">비밀번호 확인</p>
        <b-form-input/>
        <b-button>변경</b-button>
      </b-form>
    </div>
    <div class="GoBackButton">
      <b-button @click="this.$router.go(-1);">돌아가기</b-button>
    </div>
  </div>
</template>
<script>


export default {
  name: "MyPageView",
  components: {},
  data() {
    return {
      cash: 0,
    };
  },
  methods: {
    testData(){
      this.$store.commit('login', {
        userNickname: "나재현",
        userEmail: "zkxmwogus@naver.com",
        userCash: 30000,
        chargedCash: null
        })
    }
  },
  mounted(){
    this.testData()
  },
  computed:{
  }
};
</script>

<style scoped>
div {
  box-sizing: border-box;
}
.MyPageBg {
  width: 768px;
  background-color: rgb(245, 245, 245);
  margin: auto;
  border-radius: 8px;
  padding: 5em;
  text-align: left;
  overflow: hidden;/* 크기조절 해결 이유 모름 */
}
.MyPageBg form{
  clear:both; /* 겹침 해결 */
}
.MyPageTitle{
  border-bottom: solid gray;
  padding-bottom: 3em;
}
.UserDataDiv{
  padding-top: 2em;
}
.UserDataDiv p{
  margin-bottom: 0px;
}
.UserDataDiv input{
  margin-bottom: 2.5em;
  width: calc(100% - 5em);
  float: left;
}
.UserDataDiv button{
  float: right;
  width: 4em;
}
.GoBackButton{
  text-align: center;
}
</style>