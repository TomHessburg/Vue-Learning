import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    blah: "hi",
    num: 0
  },
  // show things but dont mutate
  getters: {
    helloWorld: state => {
      return `${state.blah} world c:`;
    },
    currentNum: state => {
      return state.num;
    }
  },
  // mutate the state
  //mutations are always synchronous
  mutations: {
    increment: (state, num) => {
      state.num += num;
    }
  },
  actions: {
    // can do async stuff with action
    // actions must call mutations to change state
    increment({ commit }, num) {
      // commit is being destructured off of state
      setTimeout(() => {
        //obviously just mimicing an http request
        commit("increment", 10);
      }, num);
    }
  }
});
