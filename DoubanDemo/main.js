import Vue from 'vue'
import App from './App'
import store from './store'
import {networkAPI, urlPath} from './api'
Vue.config.productionTip = false
Vue.prototype.$store = store;
Vue.prototype.$apiNet = networkAPI;
Vue.prototype.$urlPath = urlPath;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
