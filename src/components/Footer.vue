<template lang="">
    <footer class="bg-char mt-auto py-20 px-7">
        <div class="container flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-0">
            <div class="left flex flex-1 flex-col text-white space-y-8 items-center md:flex-row md:items-center space-x-0 md:space-y-0">
                <div class="col-1 flex flex-col flex-1 space-y-8 items-center md:space-x-0 md:items-start md:justify-center">
                    <router-link class="header text-center text-3xl text-white font-semibold md:text-left" :to="{name : 'Home'}">私人笔记</router-link>
                    <ul class="flex flex-row space-x-4">
                        <li class="flex items-center">
                            <a href="#"><youTube class="svg-icon w-6 h-auto text-white hover:text-teal transition-all duration-500" /></a>
                        </li>
                        <li class="flex items-center">
                            <a href="#"><twitter class="svg-icon w-6 h-auto text-white hover:text-teal transition-all duration-500" /></a>
                        </li>
                        <li class="flex items-center">
                            <a href="#"><instagram class="svg-icon w-6 h-auto text-white hover:text-teal transition-all duration-500" /></a>
                        </li>
                        <li class="flex items-center">
                            <a href="#"><linkedin class="svg-icon w-6 h-auto text-white hover:text-teal transition-all duration-500" /></a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 flex flex-1 flex-col justify-center items-center md:flex-row md:justify-start md:items-center">
                    <ul class="flex flex-row h-full space-x-4 md:flex-col items-start md:space-y-4 md:space-x-0">
                        <router-link class="link text-2xl font-medium text-white hover:text-teal transition-all duration-500" :to="{name : 'Home'}">主页</router-link>
                        <router-link class="link text-2xl font-medium text-white hover:text-teal transition-all duration-500" :to="{name : 'Blogs'}">笔记</router-link>
                        <router-link v-show="navViewData_Store.loginButtonShow" class="link text-2xl font-medium text-white hover:text-teal transition-all duration-500" :to="{name : 'Login'}">登录/注册</router-link>
                    </ul>
                </div>
            </div>
            <div class="right flex flex-col flex-1 justify-center items-center md:items-end md:justify-end">
                <p class="mt-auto text-white">© 2023 私人笔记</p>
            </div>
        </div>
    </footer>
</template>
<script>
import youTube from '../assets/Icons/youtube-brands.svg?component'
import twitter from '../assets/Icons/twitter-brands.svg?component'
import instagram from '../assets/Icons/instagram-brands.svg?component'
import linkedin from '../assets/Icons/linkedin-brands.svg?component'
import {NavViewDataStore} from "../store/index.js";

export default {
    name: 'Footer',
    components: {
        youTube,
        twitter,
        instagram,
        linkedin
    },
    data() {
        const navViewData_Store = NavViewDataStore();
        return {
            navViewData_Store,
        }
    },
}
</script>
<style lang="">
    
</style>