import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
<<<<<<< HEAD
import Brazil from "@/views/Brazil.vue";
import Hawaii from "@/views/Hawaii.vue";
import Jamaica from "@/views/Jamaica.vue";
import Panama from "@/views/Panama.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/brazil", name: "brazil", component: Brazil },
  { path: "/hawaii", name: "hawaii", component: Hawaii },
  { path: "/jamaica", name: "jamaica", component: Jamaica },
  { path: "/panama", name: "panama", component: Panama },
=======
import About from "@/views/About.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
>>>>>>> 215500f7b95e79f7a641ce44099c8b18abdf7726
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
