<template lang="">
    <div class="blog-wrapper flex flex-col shadow-md md:flex-row md:min-h-[650px] md:max-w-2xl">
        <div class="blog-content flex flex-col justify-center items-center flex-4 order-2 md:order-1 ">
            <div class="max-w-sm py-16 px-6 md:py-0">
                <h2 v-if="post.welcomeScreen" class="text-4xl font-light uppercase mb-6 md:min-w-[700px] md:text-5xl">
                    {{ post.title }}
                </h2>
                <h2 v-else class="text-4xl font-light uppercase mb-6 md:min-w-[700px] md:text-5xl">
                    {{ post.title }}
                </h2>
                <p v-if="post.welcomeScreen" class="text-2xl font-light leading-7">
                    {{ post.blogPost }}
                </p>
                <p v-else class="content-preview text-2xl max-h-6 w-64 font-light leading-7 whitespace-nowrap overflow-hidden text-ellipsis">
                    {{ post.blogHtml }}
                </p>
                <router-link class="link link-light inline-flex items-center mt-8 pb-1 border-solid hover:bg-char hover:border-transparent transition-all duration-500" v-if="post.welcomeScreen" to="#">
                    登陆/注册<ArrowRightLight class="arrow arrow-light" />
                </router-link>
                <router-link v-else to="#" class="link link-light inline-flex items-center mt-8 pb-1 border-solid hover:bg-char hover:border-transparent transition-all duration-500">
                    查看详情<ArrowRightLight class="arrow arrow-light" />
                </router-link>
            </div>
        </div>
        <div class="blog-photo">
            <img v-if="post.welcomeScreen" :src="welcomeScreenImgUrl" alt="welcome screen">
            <img v-else :src="blogPostImgUrl" alt="blog post">
        </div>
    </div>
</template>

<script>
import {homeViewDataStore} from "../store/index.js";
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component';

export default {
    name: 'BlogPost',
    props: ["post", "blogIndex"],
    components: {
        ArrowRightLight
    },
    data() {
        const homeViewData_Store = homeViewDataStore();
        return {
            homeViewData_Store,
            welcomeScreenImgUrl: "",
            blogPostImgUrl: ""
        }
    },
    async mounted() {
        await this.homeViewData_Store.getHomeViewData();
        this.welcomeScreenImgUrl = `/assets/blogPhotos/${this.homeViewData_Store.homeViewData.welcomeScreen.photo}.jpg`;
        if (this.blogIndex !== undefined) {
            this.blogPostImgUrl = `/assets/blogPhotos/${this.homeViewData_Store.homeViewData.sampleBlogPost[this.blogIndex].blogCoverPhoto}.jpg`;
        }
    },
}
</script>
<style lang="">
    
</style>