// Module 
在 ES6 之前，最主要的模块加载方案有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6实现了模块功能，完全可以取代 CommonJS 和 AMD 规范。ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量，而CommonJS 和 AMD 模块，都只能在运行时确定。
比如：CommonJS 就是整体加载某一个模块生成一个对象，再从这个对象中查找属性，这种加载称为“运行时加载”，因为只有运行时才能得到这个对象。而ES6 模块不是对象，是通过export命令显式指定输出的代码，再通过import命令输入，这种加载称为“编译时加载”或者静态加载。
ES6 的模块自动采用严格模式，要求你变量必须声明后再使用，不应该在顶层代码使用this，顶层的this指向undefined

模块功能主要由两个命令构成：export 和 import。export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。


export 命令：
一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量
export可以输出变量或者函数，例如：
export var year = 1958;
var year = 1958
export {year};

export function f(){};

function f(){}

export {f};
另外，export语句输出的接口，与其对应的值动态绑定关系，即通过该接口，可以取到模块内部实时的值。





import 命令：
使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块。

 import {a} from './xxx.js' 
由于import是静态执行，所以不能使用表达式和变量这些只有在运行时才能得到结果的语法结构。
import * as a from './xxx.js' 
* 代表全部内容，as 代表别名


// 报错
import { 'f' + 'oo' } from 'my_module';

// 报错
let module = 'my_module';
import { foo } from module;

// 报错
if (x === 1) {
  import { foo } from 'module1';
} else {
  import { foo } from 'module2';
}

export default 命令：
export default ""
从上面的例子来看，使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载，为了方便快捷，就要用到export default命令，为模块指定默认输出，当其他模块加载该模块时，import命令可以为该匿名函数指定任意名字

// export-default.js
export default function () {
  console.log('foo');
}

// import-default.js
import customName from './export-default';
customName(); // 'foo'
上面代码的import命令，可以用任意名称指向export-default.js输出的方法，这时就不需要知道原模块输出的函数名。需要注意的是，这时import命令后面，不使用大括号。
export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。


import()动态加载
import命令会被 JavaScript 引擎静态分析，无法像require方法一样在运行时加载模块，所以引入了import()函数：

import('./xxx')
import()返回一个 Promise 对象，实现了异步加载
import()有三个适用场合：
（1）按需加载
（2）条件加载
（3）动态的模块路径

Module的加载实现
传统方法就是浏览器通过<script>标签加载 JavaScript 脚本，默认情况下，浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到<script>标签就会停下来，等到执行完脚本，再继续向下渲染，如果脚本体积很大，下载和执行的时间就会很长，因此造成浏览器堵塞，用户体验差，下面就是两种异步加载的语法：

<script src="path/to/myModule.js" defer></script>
<script src="path/to/myModule.js" async></script>
defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。

ES6的模块化的基本规则或特点：

1：每一个模块只加载一次， 每一个JS只执行一次， 如果下次再去加载同目录下同文件，直接从内存中读取。 一个模块就是一个单例，或者说就是一个对象；

2：每一个模块内声明的变量都是局部变量， 不会污染全局作用域；

3：模块内部的变量或者函数可以通过export导出；

4：一个模块可以导入别的模块