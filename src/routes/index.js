import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import TempView from "../views/TempView.vue";

const Routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/temp", name: "TempView", component: TempView}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Routes,    
});

export default router;
