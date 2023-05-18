<template lang="">
    <div class="blog-card-wrap py-20 px-4 md:py-24 bg-slate-100">
        <div class="blog-card container">
            <div class="blog-cards relative grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="toggle-edit flex flex-row items-center absolute -top-20 right-0 mt-6">
                    <span class="mr-4">打开编辑功能</span>
                    <input type="checkbox" v-model="blogsViewData_Store.editPost">
                </div>
                <BlogCard :post="post" v-for="(post, index) in homeViewData_Store.homeViewData.sampleBlogCards" :key="index" :sampleIndex="index"/>
            </div>
        </div>
    </div>
</template>
<script>
import {homeViewDataStore, blogsViewDataStore} from "../store/index.js";
import BlogCard from "../components/BlogCard.vue";

export default {
    name: 'Blogs',
    components: {
        BlogCard
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
        },
    beforeUnmount() {
        this.blogsViewData_Store.editPost = false;
        console.log(this.blogsViewData_Store.editPost);
    },  
    }
</script>
<style scoped>
    input[type="checkbox"] {
        position: relative;
        border: none;
        appearance: none;
        background-color: #fff;
        outline: none;
        cursor: pointer;
        width: 80px;
        height: 30px;
        border-radius: 20px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]::before {
        content: "";
        position: absolute;
        width: 30px;
        height: 30px;
        border-radius: 20px;
        top: 0;
        left: 0;
        color: #6b7280;
        background-color: #6b7280;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    input[type="checkbox"]:checked::before {
        left: 52px;
        color: #111827;
        background-color: #111827;
    }

</style>