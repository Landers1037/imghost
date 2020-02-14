<template>
    <div class="upload">
        <p class="label">Fast图床</p>
        <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="10"
                :on-exceed="handleExceed"
                :file-list="fileList">
            <el-button size="medium" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div class="latest">
            <p>最近的20张图片</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "upload",
        data(){
            return{
                fileList: undefined
            }
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            }
        }
    }
</script>

<style scoped>
.upload{max-width: 960px;margin: 0 auto}
.label{display: block;background-color: #f0f0f0;padding: 8px;font-size: 1.2rem;}
</style>