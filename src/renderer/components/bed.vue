<template>
    <div class="bed">
        <h3>图床</h3>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" class="selall">全选</el-checkbox>
        <el-button @click="outlink" size="small">导出链接</el-button>
        <el-button @click="download" size="small">批量下载</el-button>
            <el-checkbox-group v-model="checkList" style="margin-top: 16px">
                <div class="img-cover" v-for="url in urls">
                    <el-image  :key="url" :src="url" lazy fill style="width: 180px; height: 180px" :preview-src-list="srcList">
                    </el-image>
                    <el-checkbox :label="url" class="check">&nbsp;</el-checkbox>
                </div>
            </el-checkbox-group>
        <el-dialog
                title="图片引入地址"
                :visible.sync="dia_visible"
                width="75%"
                center
                :append-to-body="true"
        >
                <ul class="link">
                    <li v-for="url in checkList">{{ gen_url(url) }}</li>
                </ul>
                <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dia_visible = false" size="mini">确 定</el-button>
              </span>
        </el-dialog>
    </div>

</template>

<script>
    import {MessageBox} from 'element-ui';
    import Downloader from 'js-file-downloader';
    import axios from 'axios';
    export default {
        name: "bed",
        data(){
            return{
                get_url: '',
                checkAll: false,
                isIndeterminate: false,
                dia_visible: false,
                urls: [], //thumb
                srcList: [], //src pic
                checkList: [], //select
                check: [] //all
            }
        },
        watch: {
            get_url: function () {
                let url = this.get_url;
                axios.get(url).then(res=>{
                    let r_urls = res.data.urls;
                    let r_src = res.data.src;
                    _this.urls = r_urls;
                    _this.srcList = r_src;
                });
            },
            urls:function () {},
            check:function () {},
            checkList:function () {},
            srcList:function () {},
        },
        created(){
            let _this = this;
            _this.check = _this.urls;
            const fs = require('fs');
            fs.readFile('./setting.json',function (err,data) {
                if(err){
                    console.log(err);
                }
                let conf = data.toString();
                conf = JSON.parse(conf);
                _this.get_url= conf.get_url;
            });
            let url = _this.get_url;
            console.log(url);
            axios.get(url).then(res=>{
                let r_urls = res.data.urls;
                let r_src = res.data.src;
                _this.urls = r_urls;
                _this.srcList = r_src;
            });
        },
        methods: {
            handleCheckAllChange(val) {
                let check = this.check;
                this.checkList = val ? check : [];
                this.isIndeterminate = false;
            },
            outlink(){
                let checkList = this.checkList;
                if (checkList.length > 0){
                    this.dia_visible = true;
                }else {
                    MessageBox.alert("你还没有选择图片");
                }
            },
            download(){
                let to_ds = this.checkList;
                function complete() {
                    setTimeout(800);
                    MessageBox.alert('下载完成');
                }
                for (var n=0;n<to_ds.length;n++){
                    console.log(to_ds[n]);
                    new Downloader({
                        url: to_ds[n],
                        autoStart:true,
                        mobileDisabled: true
                    }).then(function () {

                    }).catch(function (err) {
                        console.log(err);
                    });
                    }
                return complete();
                },

            gen_url:function (url) {
                var genurl = "<img src=\""+url+"\" >";
                return genurl;
            }
        }
    }
</script>

<style scoped>
.bed{text-align: center;margin: 0 auto;max-width: 90%}
.img-cover{position: relative;width: 180px;height: 180px;display: inline-block}
.check{position: absolute;right: 4px;top:10px}
 ul .link{font-size: 12px;}
.link li{list-style: none;margin-top: 4px;overflow-y: auto;text-align: center}
</style>
<style>
    .el-checkbox__inner{width: 20px;height: 20px;border-radius: 50%}
    .selall{background-color: #fff;padding: 4px;border-radius: 4px;border: 1px solid #808080;font-size: 12px}
    .el-button+.el-button{margin-left: 0}
    .el-checkbox__label{font-size: 12px!important;}
    .el-dialog__body{font-size: 12px}
</style>