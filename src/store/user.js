import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

export const store = new Vuex.Store({
    state:{
        login:false,
        userData:{
            userName:null
        }
    },
    mutations:{
        login(state, userData){
            state.login = true
            state.userData.userName = userData.userName
        },
        logout(state){
            state.login = false
            state.userData.userName = null
        }
    },
    plugins: [createPersistedState()],//vuex 데이터 지속
})