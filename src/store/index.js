import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/s/Home.vue";
import Contact from "@/s/Contact.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/Contact",
    component: Contact,
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;