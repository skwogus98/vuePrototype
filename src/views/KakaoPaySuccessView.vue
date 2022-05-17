<template>
  <div class="loginBg">
    <div class="img">
      <img src="../assets/logo.png" width="100px" />
    </div>
    <b-form class="login">
      <div class="inputBox">
        캐시 {{ $store.state.userData.chargedCash }}원이 충전되었습니다.
      </div>
      <h2>잔여 캐시 : {{ $store.state.userData.userCash }}</h2>
      <b-button id="loginButton" @click="$router.push('main')"
        >돌아가기</b-button
      >
    </b-form>
  </div>
</template>
<script>
export default {
  name: "CashView",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
div {
  box-sizing: border-box;
}
.loginBg {
  width: 768px;
  background-color: rgb(245, 245, 245);
  margin: auto;
  border-radius: 8px;
  margin-top: 20%;
  margin-bottom: 30px;
}
.login {
  text-align: left;
  width: 300px;
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
  margin-bottom: 15px;
}
.signIn {
  padding: 20px;
  margin-top: 20px;
  border-top: solid rgb(190, 190, 190);
  border-width: 0.1px;
}
</style>
