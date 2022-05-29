import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

export const store = new Vuex.Store({
  state: {
    login: false,
    stompSocket: null,

    // 이거 mutation 추가해두기
    subscribeList: {
      room: null,
      chat: null,
    },
    //
    
    userData: {
      userNickname: null,
      userEmail: null,
      userCash: 0,
      chargedCash: 0,
      enterRoomId: null,
    },
  },
  mutations: {
    login(state, userData) {
      state.login = true;
      state.userData = userData;
    },
    logout(state) {
      state.login = false;
      state.userData = {
        userNickname: null,
        userEmail: null,
        userCash: null,
        chargedCash: null,
      };
    },
    chargeCash(state, chargedCash) {
      state.userData.userCash += chargedCash;
      state.userData.chargedCash = chargedCash;
    },
    enterRoom(state, roomId) {
      state.userData.enterRoomId = roomId;
    },
    exitRoom(state) {
      state.userData.enterRoomId = null;
    },
    connectSocket(state, socket) {
      state.stompSocket = socket;
    },
  },
  plugins: [createPersistedState()], //vuex 데이터 지속
});
