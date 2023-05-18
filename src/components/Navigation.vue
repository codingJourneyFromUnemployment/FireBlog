<template lang="">
    <header class="bg-white py-0 px-6 shadow-md z-50">
        <nav class="relative flex container py-6 px-0">
            <div class="branding flex items-center">
                <router-link class="header font-bold text-4xl text-black" :to="{name : 'Home'}">私人笔记</router-link>
            </div>
            <div class="nav-links hidden relative items-center justify-end flex-1 md:flex">
                <ul class="mr-9 space-x-4">
                    <router-link class="link font-medium text-2xl py-2 px-4 rounded-full hover:bg-teal hover:text-white transition-all duration-500" to="/">主页</router-link>
                    <router-link class="link font-medium text-2xl py-2 px-4  rounded-full hover:bg-teal hover:text-white transition-all duration-500" to="/blogs">笔记</router-link>
                    <router-link class="link font-medium text-2xl py-2 px-4  rounded-full hover:bg-teal hover:text-white transition-all duration-500" to="#">创建笔记</router-link>
                    <router-link class="link font-medium text-2xl py-2 px-4 rounded-full hover:bg-teal hover:text-white transition-all duration-500" to="#">登录/注册</router-link>
                </ul>
            </div>
            <menuIcon @click="toggleMobileNav" class="cursor-pointer absolute top-8 right-6 h-6 md:hidden" />
        </nav>
        <transition name="mobile-nav">
            <ul v-if="mobileNav" class="mobile-nav flex flex-col fixed p-5 w-1/2 h-full max-w-md top-0 left-0 bg-char space-y-6">
                <router-link class="link text-white py-2 pl-3 text-2xl font-medium rounded-l-full hover:bg-teal transition-colors duration-300" to="/">主页</router-link>
                <router-link class="link text-white py-2 pl-3 text-2xl font-medium rounded-l-full hover:bg-teal transition-colors duration-300" to="/blogs">笔记</router-link>
                <router-link class="link text-white py-2 pl-3 text-2xl font-medium rounded-l-full hover:bg-teal transition-colors duration-300" to="#">创建笔记</router-link>
                <router-link class="link text-white py-2 pl-3 text-2xl font-medium rounded-l-full hover:bg-teal transition-colors duration-300" to="#">登陆/注册</router-link>
            </ul>
        </transition>
    </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg?component'
import { nextTick } from 'vue'

export default {
    name: 'Navigation',
    components: {
        menuIcon
    },
    data() {
        return {
            mobileNav: false,
            windowWidth: null,
        }
    },
    methods: {
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav
        },
        async closeMobileNav() {
            await this.$nextTick()
            this.windowWidth = window.innerWidth
            if (this.windowWidth > 768) {
                this.mobileNav = false
            }
        }
    },
    created() {
        window.addEventListener('resize', this.closeMobileNav)
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.closeMobileNav)
    }
}

</script>

<style scoped>
.mobile-nav-enter-active, .mobile-nav-leave-active{
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.mobile-nav-enter-from, .mobile-nav-leave-to {
    transform: translateX(-100%);
}

.mobile-nav-enter-to, .mobile-nav-leave-from {
    transform: translateX(0);
}
</style>