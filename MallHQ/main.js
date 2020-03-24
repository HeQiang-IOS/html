import Vue from 'vue'
import App from './App'
import store from './store'
import Json from  './Json'

const msg = (title, duration=1500, mask=false, icon="none")=>{
	
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	})
}

const json = type=>{
	return new Promise(resolve=> {
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = () => {
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage
	// #endif
	return prePage.$vm;
}


Vue.config.productionTip = false
Vue.prototype.$fire = new Vue();
Vue.prototype.$store = store;
Vue.prototype.$api = {msg, json, prePage};


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
