<template lang="">
    <div class="blog-wrapper flex flex-col shadow-md md:flex-row md:min-h-[650px] md:max-h-[650px]" :class="{ 'no-user': !user }">
        <div class="blog-content flex flex-col justify-center items-center flex-4 order-2 md:order-1 lg:flex-3">
            <div class="max-w-sm py-16 px-6 md:py-0">
                <h2 v-if="post.welcomeScreen" class="text-4xl font-light uppercase mb-6 md:text-5xl">{{ post.title }}</h2>
                <h2 v-else class="text-4xl font-light uppercase mb-6 md:text-5xl">{{ post.title }}</h2>
                <p v-if="post.welcomeScreen" class="text-2xl font-light leading-7">
                    {{ post.blogPost }}
                </p>
                <p v-else class="content-preview text-2xl max-h-6 w-64 font-light leading-7 whitespace-nowrap overflow-hidden text-ellipsis">
                    {{ post.blogHtml }}
                </p>
                <router-link class="link link-light flex flex-row items-center mt-8 pb-1 hover:text-teal transition-all duration-500" v-if="post.welcomeScreen" to="#">
                    登陆/注册<ArrowRightLight class="arrow arrow-light h-3 ml-2" />
                </router-link>
                <router-link v-else to="#" class="link flex flex-row items-center mt-8 pb-1 hover:text-teal transition-all duration-500">
                    查看详情<ArrowRightLight class="arrow arrow-light h-3 ml-2" />
                </router-link>
            </div>
        </div>
        <div class="blog-photo order-1 flex flex-row flex-3 shadow-md md:order-2 lg:flex-4">
            <img v-if="post.welcomeScreen" :src="welcomeScreenImgUrl" alt="welcome screen" class="block w-full h-full object-cover">
            <img v-else :src="blogPostImgUrl" alt="blog post" class="block w-full h-full object-cover">
        </div>
    </div>
</template>

<script>
import {postViewDataStore} from "../store/index.js";
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component';

export default {
    name: 'BlogPost',
    props: ["post", "blogIndex"],
    components: {
        ArrowRightLight
    },
    data() {
        const postViewData_Store = postViewDataStore();
        return {
            postViewData_Store,
            welcomeScreenImgUrl: "",
            blogPostImgUrl: ""
        }
    },
    async mounted() {
        await this.postViewData_Store.getpostViewData();
        this.welcomeScreenImgUrl = `/assets/blogPhotos/${this.postViewData_Store.postViewData.welcomeScreen.photo}.jpg`;
        if (this.blogIndex !== undefined) {
            this.blogPostImgUrl = `/assets/blogPhotos/${this.postViewData_Store.postViewData.sampleBlogPost[this.blogIndex].blogCoverPhoto}.jpg`;
        }
    },
}
</script>
<style scoped>
.blog-wrapper:nth-child(even) .blog-content {
    order: 2;
}

.blog-wrapper:nth-child(even) .blog-photo {
    order: 1;
}

.no-user:first-child .blog-content {
    background-color: #303030;
    color: #fff;
}   
</style>