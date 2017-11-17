define(function () { 'use strict';

/* Boolean */
var isBoolean = Boolean(1);
console.log('Boolean:', {
    isBoolean
});
/* number */
var numOne = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 156;
var notNum = NaN;
var infinity = Infinity;
console.log('Number:', {
    numOne,
    hex,
    binary,
    octal,
    notNum,
    infinity
});
/* String */
var names = 'yang';
var setence = "hello, " + names + " is " + (numOne + 4) + " now";
console.log('String:', {
    names,
    setence
});
/* 空值Void */
var alertTime = function () {
    // if (process.browser) window.alert(new Date())
    
};
// const unusable: void = undefined;
// const unNull: null = null;
// const undefineds: undefined = undefined;
// let u: void;
// let num: number = undefineds;
console.log({
    time: "time: " + alertTime()
});
/* 元组 */
var tuple = ['ss', 11];
tuple[3] = 'sss';
console.log('tuple', {
    tuple,
    sub: tuple[0].substr(1),
    tuple_after: tuple,
    tuple_5: tuple[5]
});
//# sourceMappingURL=primitive.js.map

/* 任意值（Any）用来表示允许赋值为任意类型 */
var anything = 'anything';
anything = 123;
console.log('anything', {
    anything,
    name: anything.name
});
//# sourceMappingURL=any.js.map

var auto = 'string';
auto = 12; // 默认了String,因而报错
var autoAny;
autoAny = 's'; // 默认any
autoAny = 12;
console.log('type_interface:', {
    auto,
    auto_typeof: typeof auto,
    autoAny
});
//# sourceMappingURL=type_interface.js.map

var union;
console.log('union_types:', {
    union: union = 'string',
    union_num: union = 123456,
    u_obj: union = { union }
});
function getLength(item) {
    // return item.length; // 报错：当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
    // return item.toString() // 报错
    return Number(item);
}
console.log('getLength:', {
    '123': getLength('123'),
    'num_123': getLength(123)
});
//# sourceMappingURL=union_types.js.map

var me = {
    id: '01',
    name: 'Yang',
    age: 18
};
// me.id = 2; // [ts] Cannot assign to 'id' because it is a constant or a read-only property.
console.log('interface:', {
    me
});
//# sourceMappingURL=interfaces.js.map

/* 数组 */
var list = [1, 2, 3];
// list = ['1', '12']; //  Type 'string' is not assignable to type 'number'
// list.push('s'); // [ts] Argument of type '"s"' is not assignable to parameter of type 'number'.
var list_union = ['1', 2, 3];
// 数组泛型
var generic = ['q', 'a', 'z'];
// 用 any 表示数组中允许出现任意类型
var any = ['xx', 1, { obj: 'obj' }];
var num_interface = [1, 2, 3, 4, 5];
console.log('Array', {
    list,
    generic,
    list_union,
    any,
    num_interface
});
//# sourceMappingURL=array.js.map

function reverse(x) {
    return typeof x === 'number' ? Number(x.toString().split('').reverse().join('')) : typeof x === 'string' ? x.split('').reverse().join('') : '';
}
console.log('function:', {
    reverse_num: reverse(12345)
});

// 问题：需要在还不确定类型的时候就访问其中一个类型的属性或方法
// 使用类型断言，将 something 断言成 string
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
function getLength$1(something) {
    if (something.length) {
        return something.length;
    } else {
        return something.toString().length;
    }
}
console.log('type_assertion:', {
    getLength: getLength$1(123)
});
//# sourceMappingURL=type_assertion.js.map

// import * as _ from 'lodash';
console.log('typings:', {});
//# sourceMappingURL=declare.js.map

// ECMAScript 的内置对象
var b = new Boolean(1);
var e = new Error('Error occurred');
var d = new Date();
var r = /[a-z]/;
console.log('built_in Object:', {
  boolean: b,
  error: e,
  date: d,
  reg: r,
  mathPow: Math.pow(10, 2)
});
// DOM 和 BOM 提供的内置对象有：
// Document、HTMLElement、Event、NodeList
// node 报错，所以屏蔽
/* let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
 */
/* document.addEventListener('click', function(e) {
  console.log(e.targetCurrent); // 报错：MouseEvent没有targetCurrent属性
});
 */
//# sourceMappingURL=built_in_object.js.map

function getName(n) {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
console.log('alias:', {
    getName: getName('name')
});
//# sourceMappingURL=alias.js.map

// 字符串字面量类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个

/* 元组 */
var mine = ['name', 20];
var custom = [];
custom[1] = 2;
custom.push('now');
mine[2] = 12;
mine.push(true); // [ts] 类型“true”的参数不能赋给类型“string | number”的参数。
// 当赋值或访问一个已知索引的元素时，会得到正确的类型
// 也可以只赋值其中一项
console.log('tuple', {
    name: mine[0],
    num: mine[1].toFixed(2),
    mine_over: mine[2],
    custom: custom[1]
});
//# sourceMappingURL=tuple.js.map

// 枚举（Enum）类型用于取值被限定在一定范围内的场景
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射
// 可以给枚举项手动赋值
// 未手动赋值的枚举项会接着上一个枚举项递增
// 未手动赋值的枚举项与手动赋值的可以重复，会覆盖
// 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查
// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
var Days;
(function (Days) {
    Days[Days["Sun"] = 7] = "Sun";
    Days[Days["Mon"] = 1.5] = "Mon";
    Days[Days["Tue"] = 2.5] = "Tue";
    Days[Days["Wed"] = 3.5] = "Wed";
    Days[Days["Thu"] = 1] = "Thu";
    Days[Days["Fri"] = 2] = "Fri";
    Days[Days["Sat"] = -'string now'] = "Sat";
})(Days || (Days = {}));
console.log('enum:', {
    Sun: Days['Sun'],
    Mon: Days[1],
    Tue: Days[2],
    Wed: Days[3],
    Thu: Days[4],
    Fri: Days[5],
    Sat: Days['Sat']
});

});
//# sourceMappingURL=bundle.amd.js.map
