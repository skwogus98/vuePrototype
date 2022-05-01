<template>
  <p>테스트 뷰</p>
  <div v-if="isLogin">
    <p>{{ getCount }}</p>
    <p>로그인을 했다면 위의 숫자가 보임</p>
    <b-button @click="logout">로그아웃</b-button>
  </div>
  <div v-else>
    <p>로그인을 안했다면 위의 숫자가 안보임</p>
    <b-button @click="login">로그인</b-button>
  </div>
  <b-button @click="addCount">Add</b-button>
</template>

<script>
export default {
  name: "TestTestComp",
  components: {},
  data() {
    return {};
  },
  methods: {
    addCount() {
      this.$store.commit("incrememt");
    },
    login() {
      this.$store.commit("login");
    },
    logout() {
      this.$store.commit("logout");
    },
  },
  computed: {
    getCount() {
      return this.$store.state.count;
    },
    isLogin() {
      return this.$store.state.login;
    },
  },
};
</script>

<style scoped></style>
