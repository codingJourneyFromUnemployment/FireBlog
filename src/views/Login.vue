<template lang="">
    <div class="form-wrap overflow-hidden flex flex-row h-screen justify-center self-center my-0 mx-auto w-11/12 lg:w-full ">
        <form class="login py-0 px-3 relative flex flex-col justify-center items-center flex-1 lg:px-12" action="">
            <p class="login-register mb-8">
                还没有账户吗？
                <router-link class="router-link text-white" :to="{name : Register}">
                </router-link>
            </p>
            <h2 class="text-center text-4xl text-char mb-10 lg:text-5xl">已有账户登陆</h2>
            <div class="inputs w-full max-w-sm">
                <div class="input flex flex-row justify-center items-center mb-6 space-x-4">
                    <envelop class="icon w-5" />
                    <input type="email" placeholder="Email" v-model="email" class="">
                </div>
                <div class="input flex flex-row justify-center items-center mb-6 space-x-4">
                    <lock_alt class="icon w-5" />
                    <input type="password" placeholder="Password" v-model="password" class="">
                </div>
            </div>
            <router-link class="forget-password" :to="{name : ForgotPassword}">
            找回密码</router-link>
            <button>登陆</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>
<script>
import envelop from '../assets/Icons/envelope-regular.svg?component'
import lock_alt from '../assets/Icons/lock-alt-solid.svg?component'
import {userDataStore} from "../store/index.js";

export default {
    name: 'Login',
    components: {
        envelop,
        lock_alt
    },
    data () {
        const userData_Store = userDataStore();
        return {
            userData_Store,
            email: '',
            password: '',
        }
    }
}
</script>
<style scoped>
input {
    width:100%;
    height: 30px;
    border: 1px;
    border-color: rgb(200, 200, 200);
    border-radius: 5px;
}
input:focus {
    outline: none;
}

    
</style>