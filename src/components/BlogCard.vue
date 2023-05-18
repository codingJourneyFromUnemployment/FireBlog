<template lang="">
    <div class="blog-card relative flex flex-col cursor-pointer rounded min-h-[420px] transiton-all duration-500 origin-bottom hover:-rotate-6 hover:scale-95 hover:shadow-md">
        <div class="icons absolute flex top-3 right-3 z-50">
            <div class="icon flex justify-center items-center w-9 h-9 rounded-full bg-white transition-all duration-500 hover:bg-char hover:text-white">
                <Edit class="edit h-4 w-auto pointer-events-none"/>
            </div>
            <div class="icon flex justify-center items-center w-9 h-9 rounded-full bg-white transition-all duration-500 hover:bg-char hover:text-white">
                <Delete class="delete h-4 w-auto pointer-events-none"/>
            </div>
        </div>
        <img :src="blogPostImgUrl" alt="" class="block rounded-lg z-10 w-full min-h-[200px] object-cover">
        <div class="info flex flex-col h-full z-30 py-8 px-4">
            <h4 class="pb-2 text-3xl font-light"> {{post.blogTitle}} </h4>
            <h6 class="font-normal text-2xl pb-4 "> 发表于：{{post.blogDate}}  </h6>
            <router-link class="link inline-flex items-center mt-auto font-semibold pt-5 text-2xl pb-1 transition-all duration-500 hover:text-char_rgba" to="#" >
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
    .icons .icon:nth-child(1){
        margin-right: 8px;
    }
</style>