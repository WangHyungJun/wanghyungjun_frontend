import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import VueResouce from "vue-resource";

Vue.config.productionTip = false;

Vue.use(VueResouce);

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
