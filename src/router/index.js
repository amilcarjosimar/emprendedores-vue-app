import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import HotDeals from "../views/HotDeals.vue";
import Selling from "../views/Selling.vue";
import Buying from "../views/Buying.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/ofertas",
    name: "HotDeals",
    component: HotDeals,
  },
  {
    path: "/vender",
    name: "Selling",
    component: Selling,
  },
  {
    path: "/comprar",
    name: "Buying",
    component: Buying,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
