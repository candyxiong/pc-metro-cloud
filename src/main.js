import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import BaiduMap from 'vue-baidu-map'

import './assets/css/reset.scss'
import './assets/css/common.scss'

import './plugins/element.js'

import {Carousel,CarouselItem,Steps,Step} from 'element-ui'
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Steps)
Vue.use(Step)
Vue.use(BaiduMap, {
    // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
    ak: 'Vd4bg5CvdCpFQP0nARN27jYYhdPwWISv'
})





//全局axios链接
//axios.defaults.baseURL = 'http://localhost:8081/'
//Vue.prototype.$http = axios
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
