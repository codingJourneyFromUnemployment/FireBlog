<template lang="">
    <div class="blog-card-wrap">
        <div class="blog-card container">
            <div class="toggle-edit">
                <span>打开编辑功能</span>
                <input type="checkbox" class="form-checkbox" v-model="editPost">
            </div>
            <BlogCard :post="post" v-for="(post, index) in homeViewData_Store.homeViewData.sampleBlogCards" :key="index" :sampleIndex="index"/>
        </div>
    </div>
</template>
<script>
import {homeViewDataStore} from "../store/index.js";
import BlogCard from "../components/BlogCard.vue";

export default {
    name: 'Blogs',
    components: {
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