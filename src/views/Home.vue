<template lang="">
    <div class="home">
        <BlogPost :post="homeViewData_Store.homeViewData.welcomeScreen" />
        <BlogPost :post="post" v-for="(post, index) in homeViewData_Store.homeViewData.sampleBlogPost" :key="index" :blogIndex="index" />
    </div>
</template>
<script>
import {homeViewDataStore} from "../store/index.js";
import BlogPost from "../components/BlogPost.vue";

export default {
    name: 'Home',
    components: {
        BlogPost
    },
    data() {
        const homeViewData_Store = homeViewDataStore();
        return {
            homeViewData_Store,
        }
    },
    async created() {
        await this.homeViewData_Store.getHomeViewData();
        }       
    }

</script>
<style lang="">
    
</style>