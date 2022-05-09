import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state() {
    return {
      count: 0,
      login: false,
    };
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
  },
  mutations: {
    incrememt(state) {
      state.count++;
    },
    login(state) {
      state.login = true;
    },
    logout(state) {
      state.login = false;
    },
  },
  plugins: [createPersistedState()],
});

export default store;
