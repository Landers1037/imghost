import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'


Vue.config.productionTip = false
axios.defaults.timeout = 10000 ;// 请求超时
axios.defaults.baseURL = '/'  ;// api 即上面 vue.config.js 中配置的地址

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
