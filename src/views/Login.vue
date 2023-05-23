<template lang="">
    <Modal v-show="modalData_Store.modalShow" />
    <loading v-show="modalData_Store.loadingShow" />
    <div class="form-wrap overflow-hidden flex flex-row h-screen justify-center self-center my-0 mx-auto w-11/12 lg:w-full ">
        <form class="login py-0 px-3 relative flex flex-col justify-center items-center flex-1 lg:px-12" @submit.prevent="login">
            <p class="login-register mb-8">
                还没有账户吗？
                <router-link class="router-link border-b-[1px] border-solid border-transparent transition-all duration-500 ease-in-out hover:border-char hover:text-teal" :to="{name : 'Register'}">
                    注册
                </router-link>
            </p>
            <h2 class="text-center text-3xl text-char mb-10 lg:text-4xl">已有账户登陆</h2>
            <div class="inputs w-full max-w-sm">
                <div class="input flex flex-row justify-center items-center mb-6 space-x-6">
                    <envelop class="icon w-5" />
                    <input type="email" placeholder="Email" v-model="email" class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105">
                </div>
                <div class="input flex flex-row justify-center items-center mb-6 space-x-6">
                    <lock_alt class="icon w-5" />
                    <input type="password" placeholder="Password" v-model="password" class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105">
                </div>
            </div>
            <router-link :to="{name : 'ForgotPassword'}" class="forget-password cursor-pointer mb-4 mx-8 border-b-[1px] border-solid border-transparent transition-all duration-500 ease-in-out hover:border-char hover:text-teal">
            忘记密码找回</router-link>
            <div class="error text-center text-red-600" v-show="errorMessage"> {{ this.errorMessage }} </div>
            <button class="flex flex-row justify-center items-center text-1xl cursor-pointer mt-8 transition-all duration-500 w-32 py-2 px-3 bg-char text-white rounded-full border-none hover:scale-105 hover:font-bold hover:bg-white hover:text-char focus:outline-none" type="submit">
                登陆<ArrowRightLight class="arrow arrow-light w-3 ml-4"/>
            </button>
            <div class="angle hidden absolute bg-white rotate-3 w-[65px] -right-[30px] h-full md:block" src=""></div>
        </form>
        <img src="/assets/background.png" class="background hidden w-2/3 bg-cover h-full lg:block">
    </div>
</template>
<script>
import Modal from "../components/Modal.vue";
import loading from '../components/Loading.vue';
import envelop from '../assets/Icons/envelope-regular.svg?component'
import lock_alt from '../assets/Icons/lock-alt-solid.svg?component'
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component';
import {userDataStore, NavViewDataStore, modalDataStore} from "../store/index.js";

export default {
    name: 'Login',
    components: {
        envelop,
        lock_alt,
        ArrowRightLight,
        Modal,
        loading,
    },
    data () {
        const userData_Store = userDataStore();
        const NavViewData_Store = NavViewDataStore();
        const modalData_Store = modalDataStore();
        return {
            userData_Store,
            modalData_Store,
            NavViewData_Store,
            email: '',
            password: '',
            errorMessage: null,
        }
    },
    methods: {
        validateForm(){
            const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(this.email === '' || this.password === ''){
                throw new Error('请提供邮箱和密码');
            } else if(this.password.length < 6){
                throw new Error('密码长度至少为6位');
            } else if(!regex.test(this.email)){
                throw new Error('邮箱格式不正确');
            }
        },
        async login(){
            try{
                this.validateForm();
                this.modalData_Store.loadingShow = true;
                await this.userData_Store.login(this.email, this.password);
                this.modalData_Store.loadingShow = false;
                this.NavViewData_Store.profileMenuDetailShow = false;
                this.NavViewData_Store.mobileNav = false;
                this.$router.push({name: 'Blogs'});
            } catch (error){
                this.errorMessage = error.message;
                this.modalData_Store.loadingShow = false;
            }
        }
    },
}
</script>
<style scoped>
.angle {
    height: 101%;
}


</style>