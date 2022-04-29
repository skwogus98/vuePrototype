<template>
  <div class="signUpBg">
    <img src="../assets/logo.png" width="100px" />
    <b-form class="signUp" @submit="submitForm">
      <div class="inputBox">
        <b-form-input
          type="email"
          v-model="registerData.email"
          placeholder="이메일을 입력해 주세요"
          required
        />
      </div>
      <div class="inputBox">
        <b-form-input
          type="password"
          id="password"
          v-model="registerData.password"
          placeholder="비밀번호를 입력해 주세요"
          required
        />
        <b-form-invalid-feedback :state="validPw">
          비밀번호는 8글자 이상이여야 합니다.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validPw"/>
      </div>
      <div class="inputBox">
        <b-form-input
          type="password"
          id="passwordCheck"
          v-model="passwordCheck"
          placeholder="비밀번호를 재입력해 주세요"
          required
          :state="checkPw"
        />
        <b-form-invalid-feedback :state="checkPw">
          비밀번호가 일치하지 않습니다,
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="checkPw"/>
      </div>
      <div class="inputBox">
        <b-form-input
          id="phone"
          type="tel"
          v-model="registerData.phoneNum"
          placeholder="휴대폰 번호를 입력해 주세요"
          pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}"
          @keyup="chkItemPhone"
          required
        />
      </div>
      <div class="inputBox">
        <b-form-input
          type="text"
          v-model="phoneCheck"
          placeholder="인증번호를 입력해 주세요"
          required
        />
      </div>
      <b-button id="loginButton" type="submit"> 회원가입 </b-button>
    </b-form>

    <div class="Login">
      계정이 있으신가요?
      <a href="/login">로그인</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  props: {},
  data() {
    return {
      registerData: {
        email: "",
        nickname: "",
        password: "",
        phoneNum: null,
      },
      passwordCheck: "",
      phoneCheck: "",
    };
  },
  components: {},
  methods: {
    submitForm() {
      //alert(this.id + this.password + this.nickname + this.age)
      var url = "http://202.31.200.215";
      // var signUpData = {
      //   user_email: this.user_email,
      //   user_pw: this.user_pw,
      //   user_nickname: this.user_nickname,
      //   user_phoneNum: this.user_phoneNum,
      // };
      axios
        .post(url + "/user", this.registerData)
        .then(function (res) {
          alert(res);
        })
        .catch(function (err) {
          alert(err);
        });
    },
    chkItemPhone() {
      var temp = document.getElementById("phone").value;
      var number = temp.replace(/[^0-9]/g, "");
      var phone = "";

      if (number.length < 9) {
        return number;
      } else if (number.length < 10) {
        phone += number.substr(0, 2);
        phone += "-";
        phone += number.substr(2, 3);
        phone += "-";
        phone += number.substr(5);
      } else if (number.length < 11) {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 3);
        phone += "-";
        phone += number.substr(6);
      } else {
        phone += number.substr(0, 3);
        phone += "-";
        phone += number.substr(3, 4);
        phone += "-";
        phone += number.substr(7);
      }
      document.getElementById("phone").value = phone;
    },
  },
  computed:{
    checkPw(){
      return this.registerData.password == this.passwordCheck
    },
    validPw(){
      return this.registerData.password.length > 7
    }
  }
};
</script>

<style>
#submit {
  text-align: left;
}
#submit label {
  display: inline-block;
  width: 100px;
}
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.signUpBg {
  width: 768px;
  background-color: rgb(245, 245, 245);
  margin: auto;
  border-radius: 8px;
  margin-top: 0px;
}
.signUp {
  text-align: left;
  width: 400px;
  margin: 0 auto;
}
#loginButton {
  width: 100%;
  margin-top: 15px;
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
.Login {
  padding: 20px;
  margin-top: 20px;
  border-top: solid rgb(190, 190, 190);
  border-width: 0.1px;
}
</style>
