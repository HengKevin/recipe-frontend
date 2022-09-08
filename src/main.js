import Vue from "vue";
import App from "./App.vue";
import Routes from "./router/index.js";
import vuetify from "./plugins/vuetify";
import { createProvider } from "./vue-apollo";
import VueApollo from "vue-apollo";
import VueRouter from "vue-router";
import "core-js/stable";
import "regenerator-runtime/runtime";

Vue.config.productionTip = false;
Vue.use(VueApollo);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: "history",
});

const apolloProvider = new VueApollo({
  defaultClient: createProvider().defaultClient,
});

new Vue({
  router: router,
  vuetify,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
