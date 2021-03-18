import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    poinPlayer1 : 0,
    poinPlayer2 : 0,
    status : false,
    winner : ''
  },
  mutations: {
    SET_POIN_1(state, payload) {
      state.poinPlayer1 = payload.poinPlayer1;
      state.poinPlayer2 = payload.poinPlayer2;
    },
    SET_STATUS(state, payload) {
      state.status = payload;
    },
    SET_WINNER(state, payload) {
      state.winner = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
