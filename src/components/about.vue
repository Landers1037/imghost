<template>
    <div class="about">
        <h1>关于FastImgHost</h1>
        <p>这是一个简单快速部署的基于Flask生成的图床网站</p>
        <div class="intro">
            <p>你可以使用它快速上传批量图片，并对它们进行压缩分辨率，生成压缩包，批量下载，批量删除，批量导出引入链接等操作</p>
            <h3>它的前身</h3>
            <p>它的前身是mgek项目下的imghost图床，使用ajax编写的能够异步上传，下载和管理图片。<br></br>因为ajax的请求数据接口没有写好，会在上传大文件时崩溃，并且在部署到web服务器后会存在图片地址出错的问题。所以对该项目停止维护</p>
            <h3>Github地址</h3>
            <a href="https://github.com/landers1037">Fastimghost的仓库</a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>
 a{color: #42b983;}
.about{max-width: 840px;margin: 0 auto;}
.about .intro{text-align: left;margin-top: 40px}
</style>