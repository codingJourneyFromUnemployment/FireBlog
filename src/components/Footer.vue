<template lang="">
    <footer class="py-25 px-7 bg-char mt-auto">
        <div class="container flex flex-col space-y-8 md:flex-row space-x-0">
            <div class="left flex flex-col text-white space-y-8 items-center md:flex-row md:items-stretch space-x-0">
                <div class="col-1 flex flex-col items-center space-y-6 md:flex-row flex-1 space-x-0">
                    <router-link class="header text-3xl text-white font-semibold" :to="{name : 'Home'}">私人笔记</router-link>
                    <ul class="flex flex-row space-x-4 mt-auto">
                        <li class="flex items-center">
                            <a href="#"><youTube class="svg-icon w-6 text-white" /></a>
                        </li>
                        <li>
                            <a href="#"><twitter class="svg-icon w-6 text-white" /></a>
                        </li>
                        <li>
                            <a href="#"><instagram class="svg-icon w-6 text-white" /></a>
                        </li>
                        <li>
                            <a href="#"><linkedin class="svg-icon w-6 text-white" /></a>
                        </li>
                    </ul>
                </div>
                <div class="col-2 flex flex-1 md:space-x-0">
                    <ul class="flex flex-row flex-wrap space-x-4 h-full justify-center md:flex-col">
                        <router-link class="link text-2xl font-medium text-white" :to="{name : 'Home'}">主页</router-link>
                        <router-link class="link text-2xl font-medium text-white" :to="{name : 'Blogs'}">笔记</router-link>
                        <router-link class="link text-2xl font-medium text-white" :to="{name : 'Newpost'}">创建笔记</router-link>
                        <router-link class="link text-2xl font-medium text-white" :to="{name : 'Login'}">登录/注册</router-link>
                    </ul>
                </div>
            </div>
            <div class="right space-y-8 text-white flex flex-col items-center md:items-end space-x-0">
                <p class="mt-auto">© 2023 私人笔记</p>
            </div>
        </div>
    </footer>
</template>
<script>
import youTube from '../assets/Icons/youtube-brands.svg?component'
import twitter from '../assets/Icons/twitter-brands.svg?component'
import instagram from '../assets/Icons/instagram-brands.svg?component'
import linkedin from '../assets/Icons/linkedin-brands.svg?component'

export default {
    name: 'Footer',
    components: {
        youTube,
        twitter,
        instagram,
        linkedin
    }
}
</script>
<style lang="">
    
</style>