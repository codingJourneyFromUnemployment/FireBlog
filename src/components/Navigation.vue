<template lang="">
    <header class="bg-white py-0 px-6 shadow-md z-50">
        <nav class="relative flex container py-6 px-0">
            <div class="branding flex items-center">
                <router-link class="header font-bold text-3xl text-black" :to="{name : 'Home'}">私人笔记</router-link>
            </div>
            <div class="nav-links">
                <ul>
                    <router-link class="link font-medium py-0 px-2  hover:bg-teal transition-colors duration-300" to="#">主页</router-link>
                    <router-link class="link font-medium py-0 px-2  hover:bg-teal transition-colors duration-300" to="#">笔记</router-link>
                    <router-link class="link font-medium py-0 px-2  hover:bg-teal transition-colors duration-300" to="#">创建笔记</router-link>
                    <router-link class="link font-medium py-0 px-2  hover:bg-teal transition-colors duration-300" to="#">登陆/注册</router-link>
                </ul>
            </div>
        </nav>
        <menuIcon class="hidden md:inline-block"/>
        <transition name="mobile-nav">
            <ul>
                <router-link class="link font-medium py-0 px-2  hover:bg-teal transition-colors duration-300" to="#">主页</router-link>
                <router-link class="link font-medium py-0 px-2  hover:bg-teal transition-colors duration-300" to="#">笔记</router-link>
                <router-link class="link font-medium py-0 px-2  hover:bg-teal transition-colors duration-300" to="#">创建笔记</router-link>
                <router-link class="link font-medium py-0 px-2  hover:bg-teal transition-colors duration-300" to="#">登陆/注册</router-link>
            </ul>
        </transition>
    </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg?component'

export default {
    name: 'Navigation',
    components: {
        menuIcon
    },
}   

</script>
