import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store.js";

Vue.config.productionTip = false;

// creating a plugin!
const RulesPlugin = {
  install(Vue) {
    Vue.mixin({
      created() {
        if (this.$options.rules) {
          Object.keys(this.$options.rules).forEach(key => {
            console.log(this.$options.rules[key]);
          });
          // console.log("here are your keys, sir", myKeys);
        }
      }
    });
  }
};

Vue.use(RulesPlugin);

new Vue({
  store: store,
  render: h => h(App)
}).$mount("#app");
