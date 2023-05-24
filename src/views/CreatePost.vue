<template lang="">
    <div class="creat-post relative h-full">
        <div class="container relative h-full pt-3 px-6 pb-16">
            <div v-show="error" class="err-message w-full p-3 rounded-md text-white mb-3 bg-char">
                <p>{{ this.errorMsg }}</p>
            </div>
            <div class="blog-info">
                <input type="text" placeholder="Enter Blog Title" v-model="postViewData_Store.userPostData.blogTitle">
                <div class="upload-file">
                    <label for="blog-photo">上传封面</label>
                    <input type="file" ref="blogPhoto" id="blog-photo" accept=".png, .jpg, .jpeg"/>
                    <button class="preview mt-0 text-center text-1xl cursor-pointer transition-all duration-500 w-32 py-2 px-3 bg-char text-white rounded-full border-none hover:bg-white hover:text-char hover:scale-105 hover:font-bold focus:outline-none" v-show="postViewData_Store.userPostData.blogPhotoFileURL">预览图片</button>
                    <span>选择的文件：{{ postViewData_Store.userPostData.blogPhotoName }}</span>
                </div>
            </div>
            <div class="editor">
                <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
            </div>
            <div class="blog-actions">
                <button class="mt-0 text-center text-1xl cursor-pointer transition-all duration-500 w-32 py-2 px-3 bg-char text-white rounded-full border-none hover:bg-white hover:text-char hover:scale-105 hover:font-bold focus:outline-none">发布笔记</button>
                <router-link class="router-button text-center text-1xl cursor-pointer transition-all duration-500 w-32 py-2 px-3 bg-char text-white rounded-full border-none hover:bg-white hover:text-char hover:scale-105 hover:font-bold focus:outline-none" to="#">预览笔记</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-vue';
import Modal from "../components/Modal.vue";
import loading from '../components/Loading.vue';
import {postViewDataStore, modalDataStore} from '../store/index.js'

export default {
    name: 'CreatePost',
    components: {
        ckeditor: CKEditor.component,
        Modal,
        loading,
    },
    data() {
        const postViewData_Store = postViewDataStore();
        const modalData_Store = modalDataStore();
        return {
            postViewData_Store,
            modalData_Store,
            error : null,
            editor : ClassicEditor,
            editorData: '<p>开始输入笔记</p>',
            editorConfig: {
                // The configuration of the editor.
            }
        }
    }
}
</script>
<style lang="">
    
</style>