<template lang="">
    <div class="form-wrap overflow-hidden flex flex-row h-screen justify-center self-center my-0 mx-auto w-11/12 lg:w-full ">
        <form class="login py-0 px-3 relative flex flex-col justify-center items-center flex-1 lg:px-12" action="">
            <p class="login-register mb-8">
                已经有账户了吗？
                <router-link class="router-link border-b-[1px] border-solid border-transparent transition-all duration-500 ease-in-out hover:border-char hover:text-teal" :to="{name : 'Login'}">
                    登陆
                </router-link>
            </p>
            <h2 class="text-center text-3xl text-char mb-10 lg:text-4xl">注册私人笔记账号</h2>
            <div class="inputs w-full max-w-sm">
                <div class="input flex flex-row justify-center items-center mb-6 space-x-6">
                    <user_alt class="icon w-5" />
                    <input type="text" placeholder="Username" v-model="userName" class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105">
                </div>
                <div class="input flex flex-row justify-center items-center mb-6 space-x-6">
                    <envelop class="icon w-5" />
                    <input type="email" placeholder="Email" v-model="email" class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105">
                </div>
                <div class="input flex flex-row justify-center items-center mb-6 space-x-6">
                    <lock_alt class="icon w-5" />
                    <input type="password" placeholder="Password" v-model="password" class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105">
                </div>
            </div>
            <button class="flex flex-row justify-center items-center text-1xl cursor-pointer mt-8 transition-all duration-500 w-32 py-2 px-3 bg-char text-white rounded-full border-none hover:bg-white hover:text-char hover:scale-105 hover:font-bold focus:outline-none" to="#">
                注册<ArrowRightLight class="arrow arrow-light w-3 ml-4"/>
            </button>
            <div class="angle hidden absolute bg-white rotate-3 w-[65px] -right-[30px] h-full md:block" src=""></div>
        </form>
        <img src="/assets/background.png" class="background hidden w-2/3 bg-cover h-full lg:block">
    </div>
</template>

<script>
import envelop from '../assets/Icons/envelope-regular.svg?component'
import lock_alt from '../assets/Icons/lock-alt-solid.svg?component'
import user_alt from '../assets/Icons/user-alt-light.svg?component'
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component';
import {userDataStore} from "../store/index.js";
import axios from 'axios';

export default {
    name: 'Login',
    components: {
        envelop,
        lock_alt,
        ArrowRightLight,
        user_alt,
    },
    data () {
        const userData_Store = userDataStore();
        return {
            userData_Store,
            userName: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async register() {
            const {userName, email, password} = this;
            if (!userName || !email || !password) {
                return {
                    //抛出错误    
                }
            }
            const {data} = await axios.post('/api/register', {
                userName,
                email,
                password,
            });
            if (data.code === 200) {
                this.userData_Store.setUserData(data.data);
                this.$router.push({name: 'Home'});
            }
        }
    }
}
</script>
<style scoped>
.angle {
    height: 101%;
}


</style>