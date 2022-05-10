<template>
  <div class="loginBg">
    <div class="img">
      <img src="../assets/logo.png" width="100px" />
    </div>

    <b-form class="login">
      <div class="inputBox">
        충전할 금액을 입력하세요.
        <b-form-input type="text" v-model="cash" />
      </div>
      <b-button id="loginButton" @click="chargeCash">충전하기</b-button>
    </b-form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CashView",
  components: {},
  data() {
    return {
      cash: 0,
    };
  },
  methods: {
    chargeCash() {
      let data = {
        money: "20000",
        id: 1,
      };
      axios
        .post("http://localhost:8081/kakaoPay", data)
        .then((res) => {
          window.location.replace(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
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
  margin-bottom: 15px;
}
.signIn {
  padding: 20px;
  margin-top: 20px;
  border-top: solid rgb(190, 190, 190);
  border-width: 0.1px;
}
</style>
