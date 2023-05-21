<template lang="">
    <Modal v-show="modalData_Store.modalShow" />
    <loading v-show="modalData_Store.loadingShow" />
    <div class="form-wrap overflow-hidden flex flex-row h-screen justify-center self-center my-0 mx-auto w-11/12 lg:w-full ">
        <form class="login py-0 px-3 relative flex flex-col justify-center items-center flex-1 lg:px-12" @submit.prevent="resetPassword">
            <h2 class="text-center text-3xl text-char mb-6 lg:text-4xl">重置密码</h2>
            <p class="text-center mb-10">
                <span class="text-char">忘记密码了吗？</span>
                <span class="text-char">输入你注册的邮箱来重置密码</span>
            </p>
            <div class="inputs w-full max-w-sm">
                <div class="input flex flex-row justify-center items-center mb-6 space-x-6">
                    <envelop class="icon w-5" />
                    <input type="email" placeholder="Email" v-model="email" class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105">
                </div>
            </div>
            <button class="flex flex-row justify-center items-center text-1xl cursor-pointer mt-6 transition-all duration-500 w-32 py-2 px-3 bg-char text-white rounded-full border-none hover:scale-105 hover:font-bold hover:bg-white hover:text-char focus:outline-none" type="submit">
                重置密码<ArrowRightLight class="arrow arrow-light w-3 ml-4"/>
            </button>
            <div class="angle hidden absolute bg-white rotate-3 w-[65px] -right-[30px] h-full md:block" src=""></div>
        </form>
        <img src="/assets/background.png" class="background hidden w-2/3 bg-cover h-full lg:block">
    </div>
</template>
<script>
import Modal from '../components/Modal.vue';
import loading from '../components/Loading.vue';
import envelop from '../assets/Icons/envelope-regular.svg?component'
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component';
import {userDataStore, modalDataStore} from "../store/index.js";

export default {
    name: 'ForgotPassword',
    components: {
        envelop,
        ArrowRightLight,
        Modal,
        loading
    },
    data () {
        const userData_Store = userDataStore();
        const modalData_Store = modalDataStore();
        return {
            userData_Store,
            modalData_Store,
            email: '',
            errorMessage: '',
        }
    },
    methods :{
        validateForm(){
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(this.email === ''){
                throw new Error('请提供邮箱');
            } else if(!regex.test(this.email)){
                throw new Error('邮箱格式不正确');
            }
        },
        async resetPassword(){
            try {
                this.validateForm();
                this.userData_Store.userData.userInfo.email = this.email;
                this.modalData_Store.loadingShow = true;
                await this.userData_Store.resetPassword ();
                this.modalData_Store.loadingShow = false;
                const userName = this.userData_Store.userData.userInfo.username
                this.modalData_Store.message = `重置密码邮件已发送至${userName}的邮箱，请查收`;
                this.modalData_Store.modalShow = true;
            } catch (error) {
                this.modalData_Store.loadingShow = false;
                this.modalData_Store.message = error.message;
                this.modalData_Store.modalShow = true;
            }
        },
    },
    created() {
        this.modalData_Store.modalShow = false;
        this.modalData_Store.loadingShow = false;
    },
}
</script>
<style scoped>
.angle {
    height: 101%;
}


</style>