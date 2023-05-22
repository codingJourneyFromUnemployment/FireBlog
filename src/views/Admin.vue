<template lang="">
    <div>
        <div class="profile">
            <!-- <Modal/> -->
            <div class="container max-w-screen-lg py-20 px-8">
                <h3 class="text-center mb-4 font-light text-3xl">管理员授权</h3>
                <div class="profile-info rounded-md shadow-md p-8 bg-gray-200 flex flex-col max-w-[600px] my-8 mx-auto justify-around items-center space-y-8">
                    <div class="addAdmin font-light text-2xl">
                        新增管理员
                    </div>
                    <div class="input my-4 min-w-[300px] flex justify-center">
                        <input class="w-full h-7 border border-solid border-gray-300 shadow-sm rounded-md transition-all duration-500 ease-in-out focus:border-teal outline-none focus:scale-105" type="email" id="userName" v-model.trim="newAdmin" placeholder="输入新管理员邮箱">
                    </div>
                    <button class="flex flex-row justify-center items-center text-1xl cursor-pointer mt-8 transition-all duration-500 w-24 py-2 px-2 bg-char text-white rounded-full border-none hover:bg-white hover:text-char hover:scale-105 hover:font-bold focus:outline-none" type="submit">
                        保存<ArrowRightLight class="arrow arrow-light w-3 ml-4"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Modal from "../components/Modal.vue";
import {userDataStore} from "../store/index.js";
import ArrowRightLight from '../assets/Icons/arrow-right-light.svg?component'

export default {
    components: {
        Modal,
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