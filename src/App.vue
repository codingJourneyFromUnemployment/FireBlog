<template>
  <div class="app-wrapper">
    <div class="app">
      <Navigation />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}

</script>


