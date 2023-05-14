<template lang="">
    <header>
        <nav class="relative container p-6 bg-red-400">
            <div class="branding">
                <router-link :to="{name : 'Home'}">私人笔记</router-link>
            </div>
            <div class="navlinks">
                <router-link class="link" to="#">主页</router-link>
                <router-link class="link" to="#">笔记</router-link>
                <router-link class="link" to="#">创建笔记</router-link>
                <router-link class="link" to="#">登陆/注册</router-link>
            </div>
        </nav>
        <menuIcon />
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
