<template>
  <div id="app">
    <el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#2f343f"
            class="switch"
            change="value = !value"
    >
    </el-switch>
    <el-button @click="drawer = true" type="primary" icon="el-icon-s-grid" circle id="grid">
    </el-button>
    <el-button @click="setting" type="info" icon="el-icon-s-tools" circle id="setting">
    </el-button>
    <el-button @click="home" type="success" icon="el-icon-s-home" circle id="home">
    </el-button>
    <el-drawer
            :visible.sync="drawer"
            :direction="direction"
            :with-header="false"
            class="dr"
            size="25%"
    >
      <p style="padding: 10px">功能</p>
      <el-menu>
        <el-menu-item @click="back">
          <i class="el-icon-upload"></i>
          <span slot="title">上传图片</span>
        </el-menu-item>
        <el-menu-item @click="bed">
          <i class="el-icon-picture"></i>
          <span slot="title">查看图床</span>
        </el-menu-item>
        <el-menu-item @click="rule">
          <i class="el-icon-document"></i>
          <span slot="title">设置规则</span>
        </el-menu-item>
        <el-menu-item @click="yourkey">
          <i class="el-icon-success"></i>
          <span slot="title">你的密匙</span>
        </el-menu-item>
        <el-menu-item @click="about">
          <i class="el-icon-info"></i>
          <span slot="title">关于软件</span>
        </el-menu-item>
      </el-menu>
    </el-drawer>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'ele-imghost',
    data(){
      return{
        value: true,
        drawer: false,
        direction: 'rtl',
      }
    },
    watch: {
      value: function () {
        let value = this.value;
        if (!value){
          document.body.style.backgroundColor = '#f0f0f0';
          document.body.style.color = '#2f343f';
        }else if(value) {
          document.body.style.backgroundColor = '#2f343f';
          document.body.style.color = 'white';
        }
      }
    },
    methods: {
      setting(){
        this.$router.push('/rule');
      },
      home(){
        this.$router.push('/');
      },
      back(){
          this.drawer = false;
          this.$router.push('/');
        },
      bed(){
        this.drawer = false;
        this.$router.push('/bed');
      },
      rule(){
        this.drawer = false;
        this.$router.push('/rule');
      },
      yourkey(){
        this.drawer = false;
        this.$router.push('/key');
      },
      about(){
        this.drawer = false;
        this.$router.push('/about');
      }
    }
  }
</script>

<style>
  /* CSS */
  @font-face {
    font-family: 'Monaco';
    src: url("../../static/Monaco.ttf") format('truetype');
    font-display: fallback;
  }
  body {
    font-family: 'Monaco','Helvetica Neue','Consolas','Fira Code', 'Microsoft YaHei',sans-serif;
    background-color: #2f343f;
    color: white;
    -webkit-user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -ms-user-select: none;
  }
  #grid,#setting,#home{position: fixed;}
  .switch{top: 10px;position: fixed;left: 2px}
  #grid{top:80px;left: 10px;margin-top: 10px;margin-left: 0}
  #setting{top:130px;left:10px;margin-top: 10px;margin-left: 0}
  #home{top:180px;left:10px;margin-top: 10px;margin-left: 0}
  .el-drawer__body{background-color: #404040;opacity: 0.8}
  .dr{color: white;text-align: center;}
  .el-menu{background-color: #404040!important;}
  .el-menu-item{color: #dddddd!important;}
  .el-menu-item:hover{background-color: #5f5f5f!important;}
  .el-menu-item:focus{background-color: #5f5f5f!important;}
</style>
