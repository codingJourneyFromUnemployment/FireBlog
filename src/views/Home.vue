<template lang="">
    <div class="home">
        <BlogPost :post="homeViewData_Store.homeViewData.welcomeScreen" />
        <BlogPost :post="post" v-for="(post, index) in homeViewData_Store.homeViewData.sampleBlogPost" :key="index" :blogIndex="index" />
        <div class="blog-card-warp relative py-20 px-4 md:py-24">
            <div class="container">
                <h3 class="font-light text-4xl mb-8">查看更多近期笔记</h3>
                <div class="blog-cards grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                    <BlogCard :post="post" v-for="(post, index) in homeViewData_Store.homeViewData.sampleBlogCards" :key="index" :sampleIndex="index"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {homeViewDataStore} from "../store/index.js";
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";

export default {
    name: 'Home',
    components: {
        BlogPost,
        BlogCard
    },
    data() {
        const homeViewData_Store = homeViewDataStore();
        return {
            homeViewData_Store
        }
    },
    async created() {
        await this.homeViewData_Store.getHomeViewData();
        }       
    }

</script>
<style lang="">
    
</style>