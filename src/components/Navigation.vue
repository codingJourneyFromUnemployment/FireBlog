<template lang="">
    <header class="bg-white py-0 px-6 shadow-md z-40">
        <nav class="relative flex container py-6 px-0">
            <div class="branding flex items-center">
                <router-link class="header font-bold text-4xl text-black" :to="{name : 'Home'}">私人笔记</router-link>
            </div>
            <div class="nav-links hidden relative items-center justify-end flex-1 md:flex">
                <ul class="mr-9 space-x-4">
                    <router-link class="link font-medium text-2xl py-2 px-4 rounded-full hover:bg-teal hover:text-white transition-all duration-500" to="/">主页</router-link>
                    <router-link class="link font-medium text-2xl py-2 px-4  rounded-full hover:bg-teal hover:text-white transition-all duration-500" to="/blogs">笔记</router-link>
                    <router-link v-show="navViewData_Store.profileMenuShow" class="link font-medium text-2xl py-2 px-4  rounded-full hover:bg-teal hover:text-white transition-all duration-500" to="/create-post">创建笔记</router-link>
                    <router-link v-show="navViewData_Store.loginButtonShow" class="link font-medium text-2xl py-2 px-4 rounded-full hover:bg-teal hover:text-white transition-all duration-500" to="/login">登录/注册</router-link>
                </ul>
                <div v-show="navViewData_Store.profileMenuShow" class="profile cursor-pointer relative flex flex-row justify-center items-center w-10 h-10 rounded-full text-white bg-char" ref="profile" @click="toggleProfileMenu">
                    <span class="pointer-events-none font-light"> {{userData_Store.userData.userInfo.username}} </span>
                    <div v-show="navViewData_Store.profileMenuDetailShow" class="profile-menu z-20 absolute top-14 right-0 w-72 bg-char shadow-md">
                        <div class="info flex flex-row items-center p-4 border-b-[1px] border-solid border-white pointer-events-none">
                            <p class="userName w-10 h-10 bg-white text-char flex flex-row justify-center items-center rounded-full"> {{userData_Store.userData.userInfo.username}} </p>
                            <div class="right">
                                <p class="userRole"> {{userRole}} </p>
                                <p class="email"> {{ userData_Store.userData.userInfo.email }} </p>
                            </div>
                        </div>
                        <div class="options p-4 flex flex-col justify-center items-start">
                            <router-link :to="{name :'Profile'}" class="option text-white flex flex-row items-center mb-3 cursor-pointer">
                                <div class="option">
                                    <userIcon class="icon w-4" />
                                </div>
                                <p class="ml-3">个人信息</p>
                            </router-link>
                            <router-link :to="{name :'Admin'}" class="option text-white flex flex-row items-center mb-3 cursor-pointer" v-show="userData_Store.userData.userStatus.admin">
                                <div class="option">
                                    <adminIcon class="icon w-4" />
                                </div>
                                <p class="ml-3">管理员</p>
                            </router-link>
                            <div @click="signOut" class="option text-white flex flex-row items-center mb-3 cursor-pointer">
                                <signOutIcon class="icon w-4" />
                                <p class="ml-3">退出</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <menuIcon @click="toggleMobileNav" class="cursor-pointer absolute top-8 right-6 h-6 md:hidden" />
        </nav>
        <transition name="mobile-nav">
            <ul v-if="navViewData_Store.mobileNav" class="mobile-nav flex flex-col fixed p-5 w-1/2 h-full max-w-md top-0 left-0 bg-char space-y-6">
                <router-link class="link text-white py-2 pl-3 text-2xl font-medium rounded-l-full hover:bg-teal transition-colors duration-300" to="/">主页</router-link>
                <router-link class="link text-white py-2 pl-3 text-2xl font-medium rounded-l-full hover:bg-teal transition-colors duration-300" to="/blogs">笔记</router-link>
                <router-link v-show="navViewData_Store.profileMenuShow" class="link text-white py-2 pl-3 text-2xl font-medium rounded-l-full hover:bg-teal transition-colors duration-300" to="/create-post">创建笔记</router-link>
                <router-link v-show="navViewData_Store.loginButtonShow" class="link text-white py-2 pl-3 text-2xl font-medium rounded-l-full hover:bg-teal transition-colors duration-300" to="/login">登陆/注册</router-link>
                <router-link v-show="navViewData_Store.profileMenuShow" class="link text-white py-2 pl-3 text-2xl font-medium rounded-l-full hover:bg-teal transition-colors duration-300" to="/profile">用户信息</router-link>
                <router-link v-show="navViewData_Store.profileMenuShow && userData_Store.userData.userStatus.admin" class="link text-white py-2 pl-3 text-2xl font-medium rounded-l-full hover:bg-teal transition-colors duration-300" to="/admin">管理员</router-link>
                <div v-show="navViewData_Store.profileMenuShow" class="link text-white py-2 pl-3 text-2xl font-medium rounded-l-full hover:bg-teal transition-colors duration-300" @click="signOut">退出登陆</div>
            </ul>
        </transition>
    </header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg?component'
import userIcon from '../assets/Icons/user-alt-light.svg?component'
import adminIcon from '../assets/Icons/user-crown-light.svg?component'
import signOutIcon from '../assets/Icons/sign-out-alt-regular.svg?component'
import {userDataStore, NavViewDataStore} from "../store/index.js";

export default {
    name: 'Navigation',
    components: {
        menuIcon,
        userIcon,
        adminIcon,
        signOutIcon
    },
    data() {
        const userData_Store = userDataStore();
        const navViewData_Store = NavViewDataStore();
        return {
            userData_Store,
            navViewData_Store,
            windowWidth: null,
        }
    },
    methods: {
        toggleMobileNav() {
            this.navViewData_Store.mobileNav = !this.navViewData_Store.mobileNav
        },
        async closeMobileNav() {
            await this.$nextTick()
            this.windowWidth = window.innerWidth
            if (this.windowWidth > 768) {
                this.navViewData_Store.mobileNav = false
            }
        },
        checkLogin() {
            if (this.userData_Store.userData.userStatus.loggedIn) {
                this.navViewData_Store.loginButtonShow = false
                this.navViewData_Store.profileMenuShow = true
            } else {
                this.navViewData_Store.loginButtonShow = true
                this.navViewData_Store.profileMenuShow = false
            }
        },
        toggleProfileMenu(e) {
            if (e.target === this.$refs.profile) {
                this.navViewData_Store.profileMenuDetailShow = !this.navViewData_Store.profileMenuDetailShow
            }
        },
        async signOut() {
            try {
                await this.userData_Store.logout()
                this.userData_Store.userDataStoreInit()
            } catch (error) {
                console.log(error.message)
            }
            this.checkLogin()
            this.$router.push('/')
        }
    },
    computed: {
        userRole() {
            return this.userData_Store.userData.userStatus.admin ? '管理员' : '普通用户'
        }
    },
    created() {
        window.addEventListener('resize', this.closeMobileNav)
        this.navViewData_Store.profileMenuDetailShow = false
        this.checkLogin()
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.closeMobileNav)
    },
    watch: {
        '$route'() {
            this.checkLogin()
        },
    },
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

.right {
    flex: 1;
    margin-left: 24px;
}

.right p:nth-child(1) {
    font-size: 14px;
}

.right p:nth-child(2),
.right p:nth-child(3) {
    font-size: 12px;
}

.option:last-child {
    margin-bottom: 0px;
}

span {
    font-size: 8px;
}
</style>