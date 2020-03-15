一、安装：npm install vuex --save；

二、引入：在src文件下新建文件夹store,在里面建index.js（名字随便起，个人习惯）；

index.js文件写入代码：

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    count: 0 //定义了一个公共属性，并初始化赋值为 0 
  },
   /*
          mutations是提交状态修改，也就是set、get中的set，这是vuex中唯一修改state的方式，但是不支持异步操作。
          每个mutation都有一个字符串的事件类型(type)和一个回调函数(handler)
          第一个参数默认是state，外部调用方式为：store.commit('SET_AGE', 30).
  mutations: {
    add(state,n) { 
      state.count+=n
    },
    reduce(state,n) { 
      state.count-=n
    }
  },
    /*
         和上面的mutations类似，但是actions支持异步操作的，外部调用方式为：store.dispatch('nameAction')
         常见的使用是：从服务器端获取数据，在数据获取完成后会调用 store.commit()来更改Store中的状态。
         Action函数接收一个与store实列具有相同方法和属性的context对象，因此我们可以使用 context.commit 提交一个
         mutation，或者通过 context.state 和 context.getters来获取state和getters
        */
	   
  actions: { },
})

三、在入口文件main.js中引入：代码如下：
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store' //此处全局引入
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

四、最好在任意页面中引用state里面的数据、调用mutations里面的方法去更新state里面数据
<template>
  <div class="home">
    <!-- <button class="btn" @click="$store.commit('add',1)">点击加</button>
    <button class="btn"  @click="$store.commit('reduce',2)">点击减</button> -->
    <button class="btn" @click="add(2)">点击加</button>
    <button class="btn" @click="reduce(1)">点击减</button>
    <div>stor里面的count:{{count}}</div>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    name: 'home',
    data() {
      return {}
     },
    created() {},
    computed: {
      // 方法一：--------------------------------------
      // count(){
      //   return this.$store.state.count
      // },

      //方法二：mapState-------------------------------
      //写法1：（mapState中用对象的形式获取）
      // ...mapState({
      //   count:state=>state.count
      // })
      // 写法2：mapState中用数组的形式获取）：
      ...mapState(["count"])
    },
    methods: {
      //方法三：mapMutations -------------------------- 此方法只能写在 methods里面，在其他地方调用即可
      ...mapMutations(['add', 'reduce'])
    }
  }
</script>
<style scoped="scoped">
  .btn {
    display: block;
    width: 90%;
    height: 45px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
</style>




