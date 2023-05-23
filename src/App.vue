<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-show="postViewData_Store.navigationShow"/>
      <router-view />
      <Footer v-show="postViewData_Store.footerShow" />
    </div>
  </div>
</template>

<script>
import {postViewDataStore} from "./store/index.js";
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },
  data() {
    const postViewData_Store = postViewDataStore();
    return {
        postViewData_Store
    }
  },
  methods: {
    checkRoute() {
      if (this.$route.path === '/login' || this.$route.path === '/register' || this.$route.path === '/forgotpassword') {
        this.postViewData_Store.navigationShow = false;
        this.postViewData_Store.footerShow = false;
      } else {
        this.postViewData_Store.navigationShow = true;
        this.postViewData_Store.footerShow = true;
      } 
    }
  },
  async created() {
    await this.postViewData_Store.getpostViewData();
    },
  watch : {
      $route: function() {
      this.checkRoute();
    }
  }
}


</script>


