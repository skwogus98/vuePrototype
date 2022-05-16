import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

export const store = new Vuex.Store({
    state:{
        login:false,
        userData:{
            userNickname: null,
            userEmail: null,
            userCash: null,
            chargedCash: null,
        }
    },
    mutations:{
        login(state, userData){
            state.login = true
            state.userData = userData
        },
        logout(state){
            state.login = false
            state.userData = {
                userNickname: null,
                userEmail: null,
                userCash: null,
                chargedCash: null,
            }
        },
        chargeCash(state, chargedCash){
            state.userData.userCash += chargedCash
            state.userData.chargedCash = chargedCash
        }
    },
    plugins: [createPersistedState()],//vuex 데이터 지속
})