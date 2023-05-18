<template lang="">
    <div class="home">
        <BlogPost :post="homeViewData_Store.homeViewData.welcomeScreen" />
        <BlogPost :post="post" v-for="(post, index) in homeViewData_Store.homeViewData.sampleBlogPost" :key="index" :blogIndex="index" />
        <div class="blog-card-warp relative py-20 px-4 md:py-24 bg-slate-100">
            <div class="container">
                <h3 class="font-light text-4xl mb-8">查看更多近期笔记</h3>
                <div class="blog-cards grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <BlogCard :post="post" v-for="(post, index) in homeViewData_Store.homeViewData.sampleBlogCards" :key="index" :sampleIndex="index"/>
                </div>
            </div>
        </div>
        <div class="updates mb-6">
            <div class="container py-25 px-6 flex flex-col items-center space-y-6 md:py-32 md:px-6 md:flex-row md:items-baseline md:justify-around">
                <h2 class="font-light text-2xl w-1/2 text-center md:text-3xl">立即注册，免费保存和分享笔记！</h2>
                <router-link class="router-button baseline flex flex-row justify-center text-1xl cursor-pointer transition-all duration-500 w-44 py-3 px-6 bg-char text-white rounded-full border-none hover:bg-white hover:text-char focus:outline-none" to="#">
                    点击注册<ArrowRightLight class="arrow arrow-light w-3 ml-4"/>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import {homeViewDataStore, blogsViewDataStore} from "../store/index.js";
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component';

export default {
    name: 'Home',
    components: {
        BlogPost,
        BlogCard,
        ArrowRightLight
    },
    data() {
        const homeViewData_Store = homeViewDataStore();
        const blogsViewData_Store = blogsViewDataStore();
        return {
            homeViewData_Store,
            blogsViewData_Store,
        }
    },
    async created() {
        await this.homeViewData_Store.getHomeViewData();
        console.log(this.blogsViewData_Store.editPost);
        },
    }       


</script>
<style lang="">
    
</style>