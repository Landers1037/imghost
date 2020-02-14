<template>
    <div class="index">
        <div class="title">
            <span>ImgHost</span><img src="../../../static/img/mgek.png">
            <p>You can try to upload your images</p>
        </div>
        <div>
            <el-upload
                    class="upload"
                    drag
                    :limit="10"
                    :action="posturl"
                    multiple
                    :on-exceed="handleExceed"
                    :before-remove="beforeRemove"
            >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，一次不超过10张</div>
            </el-upload>
        </div>
        <p class="offer">Powered by Mgek Cache</p>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                posturl: ""
            }
        },
        watch: {
          posturl: function () {
              console.log(this.posturl)
          }
        },
        created(){
            let _this = this;
            const fs = require('fs');
            fs.readFile('./setting.json',function (err,data) {
                if(err){
                    console.log(err);
                }
                let conf = data.toString();
                conf = JSON.parse(conf);
                _this.posturl = conf.post_url;
            });
        },
        methods: {
            handleExceed(files, fileList) {
                this.$message.warning(`当前限制选择 10 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    .index{text-align: center}
    .title{vertical-align: middle;padding: 10px;text-align: center}
    .title span{font-size: 26px;vertical-align: middle;padding: 10px}
    .title img{width: 90px;vertical-align: middle}
    .title p{font-size: 14px}

    .upload{margin-top: 30px}
    .offer{padding: 20px;margin-top: 40px}
</style>