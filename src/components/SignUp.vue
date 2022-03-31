<template>
  <div class="signUpBg">
    <img src="../assets/logo.png" width="100px">
    <form class="signUp">
      <div class="inputBox">
        id
        <input type="text" v-model="id">
      </div>
      <div class="inputBox">
        password
        <input type="text" v-model="password">
      </div>
      <div class="inputBox">
        nickname
        <input type="text" v-model="nickname">
      </div>
      <div class="inputBox">
        age
        <input type="text" v-model="age">
      </div>
      <b-button id="loginButton" @click="successLogin">
        회원가입
      </b-button>
    </form>

    <div class="Login">
      계정이 있으신가요?
      <a href="/login">로그인</a>
    </div>
  </div>
</template>

<script>



export default {
  name: 'SignUp',
  props: {},
  data() {
    return {
        id: '',
        password: '',
        nickname: '',
        age: '',
    }
  },
  components: {
  },
  methods: {
    submitForm() {
			alert(this.id + this.password + this.nickname + this.age)
	},
  },
}
</script>

<style>
#submit{
    text-align: left;
}
#submit label{
    display: inline-block;
    width: 100px;
}
body{
  margin: 0;
}
div{
  box-sizing: border-box;
}
.signUpBg{
  width: 768px;
  background-color: rgb(245, 245, 245);
  margin: auto;
  border-radius: 8px;
  margin-top: 0px;
}
.signUp{
  text-align: left;
  width: 250px;
  margin:0 auto;
}
#loginButton{
  width: 100%;
  margin-top: 15px;
}
.inputBox{
  text-align: left;
  width: 100%;
  margin:0 auto;
  background: rgba(223, 223, 223, 30%);
  border: rgba(80, 80, 80, 100%);
  border-radius: 6px;
  border-width: 10px;
  margin-top: 10px;
  padding: 7px;
}
.inputBox input{
  width: 100%;
  border: none;
  background: transparent;
}
.Login{
  padding: 20px;
  margin-top: 20px;
  border-top: solid rgb(190, 190, 190);
  border-width: 0.1px;
}
</style>
