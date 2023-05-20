<template>
    <div class="loading flex flex-row justify-center items-center z-50 w-full h-full top-0 bg-modal_bg fixed text-white">
        <loading_circle_light class="w-16 h-16 animate-spin"/>
    </div>
</template>
<script>
import loading_circle_light from '../assets/Icons/loading-circle-light.svg?component';

export default {
    name: 'Loading',
    components: {
        loading_circle_light
    },
}
</script>
<style>
    
</style>