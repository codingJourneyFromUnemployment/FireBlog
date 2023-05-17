<template lang="">
    <div class="blog-card relative flex flex-col cursor-pointer rounded min-h-[420px] transiton-all duration-500 origin-bottom hover:-rotate-6 hover:scale-95 hover:shadow-md">
        <div class="icons absolute flex top-3 right-3 z-50">
            <div class="icon flex justify-center items-center w-9 h-auto rounded-full bg-white transition-all duration-500 hover:bg-char">
                <Edit class="edit"/>
            </div>
            <div class="icon flex justify-center items-center w-9 h-auto rounded-full bg-white transition-all duration-500 hover:bg-char">
                <Delete class="delete"/>
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
<style scoped>
    .edit path,
    .delete path{
        fill: #fff;
    }
    
</style>