import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Newpost from "../views/Newpost.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";

const Routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/blogs", name: "Blogs", component: Blogs},
  {path: "/newpost", name: "Newpost", component: Newpost},
  {path: "/login", name: "Login", component: Login},
  {path: "/register", name: "Register", component: Register},
  {path: "/forgotpassword", name: "ForgotPassword", component: ForgotPassword},
  {path: "/profile", name: "Profile", component: Profile},
  {path: "/admin", name: "Admin", component: Admin},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Routes,    
});

export default router;
