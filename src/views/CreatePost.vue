<template lang="">
    <div class="creat-post relative h-full">
        <div class="container relative h-full pt-14 px-6 pb-16">
            <div v-show="error" class="err-message w-full p-3 rounded-md text-white mb-3 bg-char">
                <p class="text-xs">{{ this.errorMsg }}</p>
            </div>
            <div class="blog-info flex flex-col items-start space-y-6 md:flex-row md:items-end md:space-y-0 mb-8">
                <input type="text" class="title min-w-[300px] h-10 border-x-0 border-t-0 border-b border-solid border-gray-300  focus:ring-0" placeholder="输入你的标题" v-model="postViewData_Store.userPostData.blogTitle">
                <div class="upload-file w-48 ml-4 flex flex-row justify-start items-end space-x-0">
                    <label for="blog-photo" class="text-char">上传封面：</label>
                    <input type="file" class="blog-photo" ref="blogPhoto" id="blog-photo" accept=".png, .jpg, .jpeg"/>
                </div>
                <div class="photo-preview flex flex-row justify-start items-end" v-show="postViewData_Store.userPostData.blogPhotoFileURL">
                    <button class="preview text-center text-sm cursor-pointer transition-all duration-500 w-32 py-1 px-1 bg-gray-400 text-white rounded-full border-none hover:bg-white hover:text-char hover:scale-105 hover:font-bold focus:outline-none">预览图片</button>
                    <span class="font-semibold texl-base ml-4">选择的文件：{{ postViewData_Store.userPostData.blogPhotoName }}</span>
                </div>
            </div>
            <div class="editor h-60vh flex flex-col">
                <div class="warpper h-full overflow-scroll p-0 border-solid border border-gray-300 shadow-md">
                    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
            </div>
            <div class="blog-actions mt-8">
                <button class="mt-0 mr-4 text-center text-base cursor-pointer transition-all duration-500 w-32 py-2 px-3 bg-char text-white rounded-full border-none hover:bg-white hover:text-char  focus:outline-none">发布笔记</button>
                <router-link tag="button" class="router-button mt-0 text-center text-base cursor-pointer transition-all duration-500 w-32 py-2 px-4 bg-gray-400 text-white rounded-full border-none hover:bg-white hover:text-char  focus:outline-none" to="#">预览笔记</router-link>
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
<style scoped>
    input[type="file"] {
        position: relative;
        border: none;
        appearance: none;
        outline: none;
        cursor: pointer;
        width: 104px;
        height: 24px;
    }
    input[type="file"]::-webkit-file-upload-button {
        width: 104px;
        height: 24px;
        background: rgb(156 163 175);
        color: #fff;
        border-radius: 12px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    input[type="file"]::-webkit-file-upload-button:hover {
        background: #fff;
        color: #303030;
        font-weight: bold;
        scale: 1.05;
    }
</style>