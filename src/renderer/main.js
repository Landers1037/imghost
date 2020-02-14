import Vue from 'vue'
import axios from  'axios'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router";


Vue.config.productionTip = false;
axios.defaults.timeout = 10000 ;// 请求超时

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>',
  router
}).$mount('#app');
