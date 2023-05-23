<template lang="">
    <Modal v-show="modalData_Store.modalShow" />
    <loading v-show="modalData_Store.loadingShow" />
    <div class="admin">
        <div class="container max-w-screen-lg py-20 px-8">
            <h3 class="text-center mb-4 font-light text-3xl">管理员授权</h3>
            <div class="profile-info rounded-md shadow-md p-8 bg-gray-200 flex flex-col max-w-[600px] my-8 mx-auto justify-around items-center space-y-8">
                <div class="addAdmin font-light text-2xl">
                    新增管理员
                </div>
                <div class="input my-4 min-w-[300px] flex justify-center">
                    <input class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105" type="email" id="userName" v-model.trim="newAdminEmail" placeholder="输入要新增的管理员邮箱">
                </div>
                <div class="error text-center text-red-600 my-4" v-show="errorMessage"> 
                    {{ this.errorMessage }} 
                </div>
                <button class="flex flex-row justify-center items-center text-1xl cursor-pointer mt-8 transition-all duration-500 w-24 py-2 px-2 bg-char text-white rounded-full border-none hover:bg-white hover:text-char hover:scale-105 hover:font-bold focus:outline-none" type="submit" @click="adminAuth">
                    保存<ArrowRightLight class="arrow arrow-light w-3 ml-4"/>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import Modal from "../components/Modal.vue";
import loading from '../components/Loading.vue';
import {userDataStore, modalDataStore} from "../store/index.js";
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component'

export default {
    components: {
        Modal,
        ArrowRightLight,
        loading
    },
    data() {
        const userData_Store = userDataStore();
        const modalData_Store = modalDataStore();
        return {
            userData_Store,
            modalData_Store,
            newAdminEmail: '',
            errorMessage: null
        }
    },
    methods: {
        validateForm(){
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(this.newAdminEmail === ''){
                throw new Error('请提供需要授予管理员权限的用户邮箱');
            };
            if(this.newAdminEmail){
                if(!regex.test(this.newAdminEmail)){
                    throw new Error('邮箱格式不正确');
                }
            };
        },
        async adminAuth(){
            try {
                this.validateForm();
                this.modalData_Store.loadingShow = true;
                await this.userData_Store.adminAuth(this.newAdminEmail);
                this.modalData_Store.loadingShow = false;
                this.modalData_Store.message = '新增管理员成功';
                this.modalData_Store.modalShow = true;
                this.newAdminEmail = '';
                this.errorMessage = null;
            } catch (error) {
                this.modalData_Store.loadingShow = false;
                this.errorMessage = error.message;
            }
        }
    }
}


</script>
<style lang="">
    
</style>