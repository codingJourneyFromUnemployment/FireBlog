import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import TempView from "../views/TempView.vue";
import Blogs from "../views/Blogs.vue";
import Newpost from "../views/Newpost.vue";
import Login from "../views/Login.vue";

const Routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/blogs", name: "Blogs", component: Blogs},
  {path: "/newpost", name: "Newpost", component: Newpost},
  {path: "/Login", name: "Login", component: Login},
  {path: "/temp", name: "TempView", component: TempView}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Routes,    
});

export default router;
