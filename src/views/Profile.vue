<template lang="">
    <Modal v-show="modalData_Store.modalShow" />
    <loading v-show="modalData_Store.loadingShow" />
    <div class="profile">
        <div class="container max-w-screen-lg py-20 px-8">
            <h3 class="text-center mb-4 font-light text-3xl">账号设置</h3>
            <div class="profile-info rounded-md shadow-md p-8 bg-gray-200 flex flex-col max-w-[600px] my-8 mx-auto justify-around items-center space-y-8">
                <div class="userName w-20 h-20 font-light bg-char text-white rounded-full flex justify-center items-center">
                    {{userData_Store.userData.userInfo.username}}
                </div>
                <div class="admin-badge flex text-white text-xl py-2 px-4 rounded-md bg-char my-4 mx-0 text-center" v-if="userData_Store.userData.userStatus.admin">
                    <adminIcon class="w-4 h-auto mr-3" />
                    <span>管理员</span>
                </div>
                <div class="input my-4 mx-0 min-w-[300px]">
                    <label class="text-xl block pb-2" for="userName">用户名</label>
                    <input class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105" type="text" id="userName" v-model.trim="newUserName" :placeholder="userData_Store.userData.userInfo.username">
                </div>
                <div class="input my-4 mx-0 min-w-[300px]">
                    <label class="text-xl block pb-2" for="email">邮箱</label>
                    <input class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105" type="email" id="email" v-model.trim="newEmail" :placeholder="userData_Store.userData.userInfo.email">
                </div>
                <div class="error text-center text-red-600 my-4" v-show="errorMessage"> 
                    {{ this.errorMessage }} 
                </div>
                <button class="flex flex-row justify-center items-center text-1xl cursor-pointer mt-8 transition-all duration-500 w-32 py-2 px-3 bg-char text-white rounded-full border-none hover:bg-white hover:text-char hover:scale-105 hover:font-bold focus:outline-none" type="submit" @click="updateUserProfile">
                    保存更改<ArrowRightLight class="arrow arrow-light w-3 ml-4"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import loading from '../components/Loading.vue';
import {userDataStore, modalDataStore} from "../store/index.js";
import adminIcon from '../assets/Icons/user-crown-light.svg?component'
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component'

export default {
    components: {
        Modal,
        adminIcon,
        ArrowRightLight,
        loading
    },
    data() {
        const userData_Store = userDataStore();
        const modalData_Store = modalDataStore();
        return {
            userData_Store,
            modalData_Store,
            newUserName: '',
            newEmail: '',
            errorMessage: null
        }
    },
    methods: {
        validateForm(){
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(this.newUserName === '' && this.newEmail === ''){
                console.log(this.newUserName, this.newEmail);
                throw new Error('请提供需要修改的用户名或邮箱');
            }
            if(this.newUserName === this.userData_Store.userData.userInfo.username || this.newEmail === this.userData_Store.userData.userInfo.email){
                console.log(this.newUserName, this.newEmail);
                throw new Error('不能用原用户名或邮箱进行修改');
            }
            if(this.newUserName){
                if(this.newUserName.length < 3){
                    console.log(this.newUserName, this.newEmail);
                    throw new Error('用户名长度至少为3位');
                }
            }
            if(this.newEmail){
                if(!regex.test(this.newEmail)){
                    console.log(this.newUserName, this.newEmail);
                    throw new Error('邮箱格式不正确');
                }
            }
        },
        async updateUserProfile(){
            try {
                this.validateForm();
                this.modalData_Store.loadingShow = true;
                await this.userData_Store.updateUserProfile (this.newUserName, this.newEmail);
                this.modalData_Store.loadingShow = false;
                this.modalData_Store.message = '用户信息修改成功';
                this.modalData_Store.modalShow = true;
                this.errorMessage = null;
                this.newUserName = '';
                this.newEmail = '';
            } catch (error) {
                this.modalData_Store.loadingShow = false;
                this.errorMessage = error.message;
            }
        },
    },
    }
</script>
<style lang="">
    
</style>