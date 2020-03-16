父组件给子组件传递数据
在组件中动态绑定（如果只想传递一个静态的prop ，可以不绑定，如下）要传递的数据
<child msg= "这里是你要传给子组件的数据" class="child"> 
在子组件中使用 props 选项去接收来自父组件传递过来的数据
完整代码如下
<div id="father">
    <label for="msg">
      在下面输入框中输入内容可以改变爸爸的 message：
    </label> <br>
    <input id="msg" type="text" v-model="message">
    <hr>
    <child v-bind:msg= "message" class="child"> 
    <!-- 通过 v-bind 动态赋值 -->
    </child>
</div>

<script>
    let child = {
      template: `<div>
      <p>下面是来自爸爸的信息:</p>
      <p>{{ msg }}</p>
    </div>`,
      props: ['msg']
    }
    let father = new Vue({
      el:'#father',
      components: { child }, // 注册子组件
      data: {
        message: 'message from father'
      }
    })
  </script>
关于props

可以使用v­-bind动态绑定父组件来的内容
在组件中使用props来从父组件接收参数，注意，在props中定义的属性，都可以在子组件中直接使用
props来自父级，而组件中data return的数据就是组件自己的数据，两种情况作用域就是组件本身，可以在template，computed，methods中直接使用
props的值有两种，一种是字符串数组，一种是对象
对于数组或对象类型的 prop 来说，在子组件中改变这个对象或数组本身将会影响到父组件的状态（尽可能将父子组件解耦，避免子组件无意中修改了父组件的状态）

子组件给父组件传递数据

自定义事件

子组件用 $emit() 来触发事件 ，父组件用 v-on来 监听子组件的事件 。

第一步：自定义事件
第二步： 在子组件中用$emit触发事件。第一个参数是事件名，后边的参数是要传递的数据
第三步：在自定义事件中用一个参数来接收

下面通过一个简单的例子（在子组件中更新积分，在父组件中显示最终积分）来了解子传父的流程。点这里预览

在父组件中定义 自定义事件update-data
    <div id="app">
      <h4>我是父组件 </h4>
      <p>目前积分是： {{ data }}</p>
      <hr>
      <son-component @update-data="update" > </son-component>
    <!-- v-on 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以推荐始终使用 kebab-case 的事件名 -->
   </div>
在子组件中用$emit触发事件，并传入一个值
 add: function () {
              this.count += 10;
              this.$emit('update-data', this.count);
            //  事件名不存在任何自动化的大小写转换,而是触发的事件名需要完全匹配监听这个事件所用的名称，所以这里仍旧是'update-data'
            },
update-data 事件触发后，会执行父组件的 update 函数，从而更新当前积分

在组件中使用 v-model

一个组件上的 v-model 默认会利用名为 value 的 prop 和名为 input 的事件。
还是上面的例子，不同的是使用v-model实现

删掉我们的自定义事件，改用v-model ：

  <son-component v-model="data" > </son-component>
数据改变时emit 一个 input 事件

  reduce: function () {
              this.count -= 10;
              this.$emit('input', this.count)
            }
所以 v-­model 其实是一个语法糖，这背后其实做了两个操作:

v-­bind 绑定一个 value 属性
v-­on 指令给当前元素绑定 input 事件


