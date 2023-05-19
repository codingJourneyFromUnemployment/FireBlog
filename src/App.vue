<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation v-show="homeViewData_Store.navigationShow"/>
      <router-view />
      <Footer v-show="homeViewData_Store.footerShow" />
    </div>
  </div>
</template>

<script>
import {homeViewDataStore} from "./store/index.js";
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  },
  data() {
    const homeViewData_Store = homeViewDataStore();
    return {
        homeViewData_Store
    }
  },
  methods: {
    checkRoute() {
      if (this.$route.path === '/login' || this.$route.path === '/register' || this.$route.path === '/forgot-password') {
        this.homeViewData_Store.navigationShow = false;
        this.homeViewData_Store.footerShow = false;
      } else {
        this.homeViewData_Store.navigationShow = true;
        this.homeViewData_Store.footerShow = true;
      } 
    }
  },
  async created() {
    await this.homeViewData_Store.getHomeViewData();
    },
  watch : {
      $route: function() {
      this.checkRoute();
    }
  }
}


</script>


