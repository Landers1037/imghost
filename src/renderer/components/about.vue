<template>
    <div class="about">
        <h1>关于Imghost</h1>
        <p>这是一个基于Mgek Imghost项目的开源图床上传工具</p>
        <p>基于Electron，使用flask作为后端的图床服务器</p>
        <h3>项目地址</h3>
        <a href="javascript:void (0)" @click="open">Github</a>
        <h3>开源许可</h3>
        <p>MIT license</p>
        <span>verison 1.0.1</span>
    </div>
</template>

<script>
    export default {
        name: "about",
        methods: {
            open(){
                const shell = require('electron').shell;
                shell.openExternal("https://github.com/landers1037/ele-imghost");
            }
        }
    }
</script>

<style scoped>
.about{text-align: center}
</style>