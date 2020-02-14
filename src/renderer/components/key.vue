<template>
    <div class="key">
        <h1>你的密匙</h1>
        <p>{{your_key}}</p>
        <div class="getkey">
            <p>你可以在这里获取你的专属Key</p>
            <a href="javascript:void(0)" @click="open">Mgek Key</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "key",
        data(){
            return{
                your_key: ''
            }
        },
        watch: {
            your_key: function () {

            }
        },
        mounted() {
            let _this = this;
            const fs = require('fs');
            fs.readFile('./setting.json',function (err,data) {
                if(err){
                    console.log(err);
                }
                let conf = data.toString();
                conf = JSON.parse(conf);
                _this.your_key = conf.key;
            });
        },
        methods: {
            open(){
                const shell = require('electron').shell;
                shell.openExternal('http://key.mgek.cc');
            }
        }
    }
</script>

<style scoped>
.key{text-align: center;max-width: 90%;margin: 0 auto}
.key p{padding: 30px 0 30px 0;font-size: 14px}
.getkey{margin-top: 30px}
.getkey p{font-size: 14px;border: 2px solid #fe4c40;width: 220px;margin: 0 auto;padding: 10px 6px}
.getkey a{text-decoration: none;margin-top: 30px;display: block;color: #fe4c40;font-size: 20px}
.getkey a:hover{color: #ffa07b}
</style>