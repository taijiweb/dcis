# Domcom API 参考文档

## 文档说明

### 记法、体例

#### 函数原型记法

	functionName arg1[: Type1], arg2[: Type2], ...
	
	functionName()

#### 方法原型记法

	object.methodName arg1[: Type1], arg2[: Type2], ...
	
	object.methodName()

此处[]表示其中的内容可能省略。后文中函数或方法原型说明中出现的[...]，如果不是表示数组类型，就表示其中的内容是可选参数。

根据上下文，如果类型是显然的，不便描述或不用描述，就会省略类型部分。

上述记法适用于下一节“类型说明”以及后文中的函数或方法原型说明。


### 类型说明

本类型说明只是一个非正式的规范，为我们理解文档和编写用户程序提供帮助之用，不应该被当作精确的形式化体系。

以下是本文档函数原型说明中可能出现的一些类型:

* item:toComponent:    代表item可以是任何值，但是item会经过toComponent(item)转换成合适的部件。

* value:domField:    代表value可以是任何值，但是value会经过domField(value)转换成适用的dom节点特性值。

* fn:Reactive：   fn是响应函数

* x:Any:    x可以是任何类型

* items:[Type]:    items是元素类型为Type的数组

* Array:    数组类型

* items:[Type1, Type2, ...]:    items是元素按照Type1与Type2依次成对出现的数组

* hash:Hash：    hash是Object，要求不是数组或null

* item：HashValue:    代表item是Hash对象的值。Hash对象一般是相关函数的某个参数或宿主对象的某个字段。

* item：HashKey:    代表item是Hash对象的键。Hash对象一般是相关函数的某个参数或宿主对象的某个字段。

* item: Set:    代表item是个集合（特指键值总是为true或1的Object）。

* fn:(param1[: Type1] [, param2[: Type2] [, ...] ]) -> [Type]:    函数类型。

* item:Type1|Type2:    代表item:可以是Type1或者Type2的值。

* item:ValueReactive：    item可以是任何值，也可以是响应函数，如果item是普通函数，会被转换为强制响应函数。

* attrs:Attrs:    代表attrs可以作为Tag部件的attrs属性。core/util.coffee中，isAttrs(attrs)应该为true

* item：Index:    代表item是数组的下标索引。该数组一般是相关函数的某个参数或宿主对象的某个字段。

* item：Boolean:  代表item是布尔类型。

* item：Int: 代表item是整数类型

* item：String:    代表item是字符串。

* item：Promise:    代表item是Promise类型，应该带有then方法和catch方法。

* item:TagName:    代表item是可以作为Html标签名使用的合适的字符串，如div, custom-tag等等。

* item:PropName:    代表item是合适的Node特性名或者Node的Style中的特性名。根据不同的方法，使用这两者其中之一。

* item:PropSet:    代表item是从PropName到特性值的Hash类型。其中特性值是domField类型。

* item:ClassFn:    代表item是className(或class)特性的值或值列表，该值会被classFn作为参数，合并到一起作为className的特性。

### 关于方法的说明

本文档只描述公用的方法，包括类、类的实例、对象，响应函数（附带提供）的公用方法。

************************************************************************

## 获取Domcom、设置页面和引用Domcom API

### 获取Domcom
  npm install --save domcom-isomorphic

  git clone https://www.github.com/taijiweb/domcom-isomorphic

  下载github发布版本： [Github releases](https://github.com/taijiweb/domcom-isomorphic/releases)

  使用cdn: 感谢cdn.jsdelivr.net 提供cdn链接：

    http://cdn.jsdelivr.net/domcom/0.1/domcom.min.js

### 在页面中设置Domcom

  根据开发和应用需要从安装或下载的文件夹中选择domcom/dist/下的domcom.js, domcom.min.js, domcom-basic.js， domcom-basic.min.js中合适的文件，按照通常方法向html页面添加script标签：

    `<script src="path/to/domcom.min.js"/>`

  如果使用cdn.jsdelivr.net提供的cdn链接， 则应该添加如下的script标签

    `<script src="http://cdn.jsdelivr.net/domcom/0.1/domcom.min.js"/>`

  在domcom的script标签之后添加自己的js脚本：

    `<script src="path/to/my-app.js"/>`

### 导入和引用domcom提供的api

在浏览器环境下，添加domcom的`<script>`标签后，dc会成为全局变量，即window.dc。建议使用Coffee-script，或者babel以支持ES6语法，借助它们就可以参照如下的语法引用domcom提供的api：

	{see, div, list, if_} = window.dc

#### ES 6

如果采用webpack工具(或者browserify)，利用babel.js对ES 6 也可以参照如下的语法：

    {see, div, list, if_} = dc = require('domcom')

或者直接导入和引用单个文件(不提倡)：

    {see} = require('domcom/src/flow'
    {div} = require('domcom/src/core/')

### 原生的ES 5的语法

如果不借助上述工具，单纯采用原生的ES 5，就只能用以下的方法：

	var see = dc.see, div = dc.div, if_ = dc.if_;

或者象这样：

	dc.see(1); dc.div({}, "hello"); dc.if_(x, "hello",  "hi")

这显然不是很理想。还是建议尽量采用Coffee-script或者ES6的语法。 

***********************************************************

