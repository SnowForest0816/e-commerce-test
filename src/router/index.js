import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/HomePage.vue";
import ConfirmPay from "../components/ConfirmPay.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/ConfirmPay",
    name: "ConfirmPay",
    component: ConfirmPay,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
