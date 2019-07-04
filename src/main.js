import Vue from "vue";
import App from "./App.vue";
import VuePersist from 'vue-persist';

Vue.config.productionTip = false;
Vue.use(VuePersist)

new Vue({
  render: h => h(App)
}).$mount("#app");
