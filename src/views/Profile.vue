<template lang="">
    <div class="profile">
        <!-- <Modal/> -->
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
                    <input class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105" type="text" id="userName" v-model.trim="userName">
                </div>
                <div class="input my-4 mx-0 min-w-[300px]">
                    <label class="text-xl block pb-2" for="email">邮箱</label>
                    <input class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105" type="email" id="email" v-model.trim="email">
                </div>
                <button class="flex flex-row justify-center items-center text-1xl cursor-pointer mt-8 transition-all duration-500 w-32 py-2 px-3 bg-char text-white rounded-full border-none hover:bg-white hover:text-char hover:scale-105 hover:font-bold focus:outline-none" type="submit">
                    保存更改<ArrowRightLight class="arrow arrow-light w-3 ml-4"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from "../components/Modal.vue";
import {userDataStore} from "../store/index.js";
import adminIcon from '../assets/Icons/user-crown-light.svg?component'
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component'

export default {
    components: {
        Modal,
        adminIcon,
        ArrowRightLight
    },
    data() {
        const userData_Store = userDataStore();
        return {
            userData_Store
        }
    },
}
</script>
<style lang="">
    
</style>