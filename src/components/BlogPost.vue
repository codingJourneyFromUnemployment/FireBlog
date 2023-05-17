<template lang="">
    <div class="blog-wrapper">
        <h2>
            hello
        </h2>
        <!-- <div class="blog-content">
            <h2>
                {{ homeViewData_Store.homeViewData.welcomeScreen.title }}
            </h2>
            <p>
                {{ homeViewData_Store.homeViewData.welcomeScreen.blogPost }}
            </p>
            <router-link class="link link-light" to="#">
                登陆/注册<ArrowRightLight class="arrow arrow-light" />
            </router-link>
            <template v-for="post in homeViewData_Store.homeViewData.sampleBlogPost">
                <h2>{{ post.title }}</h2>
                <p class="content-preview">
                    {{ post.blogHtml }}
                </p>
                <router-link class="link link-light" to="#">
                    查看详情<ArrowRightLight class="arrow arrow-light" />
                </router-link>
            </template>
        </div>
        <div class="blog-photo">
            <img :src="welcomeScreenImgUrl" alt="welcome screen">
            <img v-for="blogPostImgUrl in blogPostImgUrls" :key="blogPostImgUrl" :src="blogPostImgUrl" alt="blog post">
        </div> -->
    </div>
</template>

<script>
import {homeViewDataStore} from "../store/index.js";
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component';

export default {
    name: 'BlogPost',
    components: {
        ArrowRightLight
    },
    data() {
        const homeViewData_Store = homeViewDataStore();
        return {
            homeViewData_Store,
            welcomeScreenImgUrl: "",
            blogPostImgUrls: []
        }
    },
    async created() {
        await this.homeViewData_Store.getHomeViewData();
        this.welcomeScreenImgUrl = `/assets/blogPhotos/${this.homeViewData_Store.homeViewData.welcomeScreen.photo}.jpg`;
        this.homeViewData_Store.homeViewData.sampleBlogPost.forEach( post => {
            this.blogPostImgUrls.push(`/assets/blogPhotos/${post.blogCoverPhoto}.jpg`);
        });
    },
}
</script>
<style lang="">
    
</style>