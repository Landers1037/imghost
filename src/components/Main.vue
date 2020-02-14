<template>
  <div class="hello">
    <h1>Fast ImgHost</h1>
    <p>
      A simple and will-desinged image host by Flask,<br>
      check out the
      <a href="https://doc.mgek.cc/docs/fastimghost" target="_blank" rel="noopener">documentation</a>.
    </p>
    <h3>Previous version</h3>
    <p>FastImgHost is a new-designed version.The old version of Imghost has stopped maintenance.</p>
    <h3>Try now!</h3>
    <el-button type="primary" class="button" @click="upload">Go upload...</el-button>
  </div>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    upload(){
      this.$router.push('/upload')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 3rem;
}
p {
  font-size: 1rem;
}
h3 {
  margin: 40px 0 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button{width: 210px;height: 60px;font-size: 1.4rem}
</style>
