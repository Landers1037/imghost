<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
  #nav{
    text-align: center;
    padding: 20px;
  }
  #nav a{
    color: #42b983;
    padding: 10px;
    background-color: #f0f0f0;
    text-decoration: none;
    margin: 0 6px 0 6px;

  }
</style>
