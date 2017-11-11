# typescript笔记

> rollup编译

## 概念

### 原始数据类型

* JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）
* 原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol
* ${expr} 用来在模板字符串中嵌入表达式
* void 表示没有任何返回值的函数
* 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组
* 使用数组泛型（Array Generic） Array\<elemType> 来表示数组

### 任意值（Any）用来表示允许赋值为任意类型

* 在任意值上访问任何属性都是允许的
* 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
* 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型

### 类型推论

> 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型
* TypeScript 会在没有明确的指定类型的时候推测出一个类型
* 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查

### 联合类型

> 联合类型（Union Types）表示取值可以为多种类型中的一种
* 使用 | 分隔每个类型
* 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
* 联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型

### 接口

> 定义对象的类型, 对行为的抽象, 而具体如何行动需要由类（classes）去实现（implements）
* 除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述
* 接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀
* 赋值的时候，变量的形状必须和接口的形状保持一致
* 如果不要完全匹配一个形状，那么可以用可选属性，可选属性表示该属性可以不存在，这时仍然不允许添加未定义的属性
* 一旦定义了任意属性，那么确定属性和可选属性都必须是它的子属性
  * 使用 [propName: string] 定义了任意属性取 string 类型的值
* readonly 定义只读属性, 只能在创建的时候被赋值
  * 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候