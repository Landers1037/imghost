<template>
    <div class="rule">
        <h1>配置规则</h1>
        <div>
            <el-form ref="form" :model="conf" label-width="100px">
                <el-form-item label="后端api">
                    <el-input v-model="conf.path"></el-input>
                </el-form-item>
                <el-form-item label="上传地址">
                    <el-input v-model="conf.post_url"></el-input>
                </el-form-item>
                <el-form-item label="图片请求地址">
                    <el-input v-model="conf.get_url"></el-input>
                </el-form-item>
                <el-form-item label="你的密匙">
                    <el-input v-model="conf.key"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <el-button type="info" round class="update_b" @click="update">更新</el-button>
    </div>
</template>

<script>
    import {MessageBox} from 'element-ui';
    export default {
        name: "rule",
        data(){
            return{
                conf: {
                    "path":'',
                    "post_url":'',
                    "get_url":'',
                    "key":''
                }
            }
        },
        watch: {
            conf: function () {

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
                _this.conf = conf;
            });
        },
        methods: {
            update(){
                const fs = require('fs');
                let _this = this;
                let newconf = {};
                newconf["path"] = _this.conf.path;
                newconf["post_url"] = _this.conf.post_url;
                newconf["get_url"] = _this.conf.get_url;
                newconf["key"] = _this.conf.key;
                newconf = JSON.stringify(newconf," ","\t");
                fs.writeFile('./setting.json',newconf,function (err) {
                    if(err){
                        console.log(err);
                    }
                    MessageBox.alert("更新配置完成");
                });
            }
        }
    }
</script>

<style scoped>
.rule{text-align: center;margin: 0 auto;max-width: 80%}
.update_b{
    font-size: 15px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    margin-top: 20px;
}
</style>