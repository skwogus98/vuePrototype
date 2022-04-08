<template>
  <div class="loginBg">
    <div class="img">
      <img src="../assets/logo.png" width="100px" />
    </div>

    <form class="login">
      <div class="inputBox">
        id
        <input type="text" v-model="id" />
      </div>
      <div class="inputBox">
        pw
        <input type="password" v-model="password" />
      </div>
      <b-button id="loginButton" @click="successLogin"> 로그인 </b-button>
    </form>

    <div class="signIn">
      계정이 없으신가요?
      <a href="/signup">가입하기</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  props: {},
  data() {
    return {
      id: "",
      password: "",
    };
  },
  components: {},
  methods: {
    successLogin: function () {
      this.$emit("close");
      //alert("hi")
    },
  },
};
</script>

<style>
div {
  box-sizing: border-box;
}
.loginBg {
  width: 768px;
  background-color: rgb(245, 245, 245);
  margin: auto;
  border-radius: 8px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.login {
  text-align: left;
  width: 250px;
  margin: 0 auto;
  margin-top: 10px;
}
.inputBox {
  text-align: left;
  width: 100%;
  margin: 0 auto;
  background: rgba(223, 223, 223, 30%);
  border: rgba(80, 80, 80, 100%);
  border-radius: 6px;
  border-width: 10px;
  margin-top: 10px;
  padding: 7px;
}
.inputBox input {
  width: 100%;
  border: none;
  background: transparent;
}
#loginButton {
  width: 100%;
  margin-top: 15px;
}
.signIn {
  padding: 20px;
  margin-top: 20px;
  border-top: solid rgb(190, 190, 190);
  border-width: 0.1px;
}
</style>
