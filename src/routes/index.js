import { createRouter, createWebHistory } from 'vue-router';
import { userDataStore } from "../store/index.js";
import Home from "../views/Home.vue";
import Blogs from "../views/Blogs.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import ForgotPassword from "../views/ForgotPassword.vue";
import Profile from "../views/Profile.vue";
import Admin from "../views/Admin.vue";
import CreatePost from '../views/CreatePost.vue';


function isLoggedIn(to, from, next) {
  const userData_Store = userDataStore();
  if (userData_Store.userData.userStatus.loggedIn === true) {
    next()
  } else {
    next('/login')
  }
}

async function isAdmin(to, from, next) {
  const userData_Store = userDataStore();
  if (userData_Store.userData.userStatus.loggedIn === true && userData_Store.userData.userStatus.admin === true) {
    next()
  } else {
    await userData_Store.logout()
    next('/login')
    console.log('not admin')
  }
}


const Routes = [
  {path: "/", name: "Home", component: Home},
  {path: "/blogs", name: "Blogs", component: Blogs},
  {path: "/login", name: "Login", component: Login},
  {path: "/register", name: "Register", component: Register},
  {path: "/forgotpassword", name: "ForgotPassword", component: ForgotPassword},
  {
    path: "/profile", 
    name: "Profile", 
    component: Profile,
    beforeEnter: [isLoggedIn],
  },
  {
    path: "/admin", 
    name: "Admin", 
    component: Admin,
    beforeEnter: [isAdmin],
  },
  {
    path: "/create-post",
    name: "CreatePost",
    component: CreatePost,
    beforeEnter: [isLoggedIn],
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Routes,    
});

export default router;
