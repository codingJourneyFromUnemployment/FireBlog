<template lang="">
    <div class="blog-card relative flex flex-col cursor-pointer rounded min-h-[420px] transiton-all duration-500 hover:origin-bottom hover:shadow-md">
        <div class="icons">
            <div class="icon">
                <Edit class="icon"/>
            </div>
            <div class="icon">
                <Delete class="icon"/>
            </div>
        </div>
        <img :src="blogPostImgUrl" alt="">
        <div class="info">
            <h4> {{post.blogTitle}} </h4>
            <h6> 发表于：{{post.blogDate}}  </h6>
            <router-link class="link" to="#" >
                查看详情<ArrowRightLight class="arrow arrow-light h-3 ml-2" />
            </router-link>
        </div>
    </div>
</template>
<script>
import {homeViewDataStore} from "../store/index.js";
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component';
import Edit from '../assets/Icons/edit-regular.svg?component';
import Delete from '../assets/Icons/trash-regular.svg?component';

export default {
    name:"blogCard",
    components: {
        ArrowRightLight,
        Edit,
        Delete
    },
    data() {
        const homeViewData_Store = homeViewDataStore();
        return {
            homeViewData_Store,
            blogPostImgUrl: ""
        }
    },
    props: ["post", "sampleIndex"],
    async mounted() {
        await this.homeViewData_Store.getHomeViewData();
        if (this.sampleIndex !== undefined) {
            this.blogPostImgUrl = `/assets/blogCards/${this.homeViewData_Store.homeViewData.sampleBlogCards[this.sampleIndex].blogCoverPhoto}.jpg`;
        }
    },
}
</script>
<style lang="">
    
</style>