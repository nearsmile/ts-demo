'use strict';

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 'blue'.length] = "Blue";
})(Color || (Color = {})); // "blue".length 就是一个计算所得项
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
// declare const enum Direction { Up, Down, Left, Right }
var directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
// let direction = [Direction.Up, Direction.Down, Direction.Left, Direction.Right]
console.log('enum2:', {
    color: Color['Blue'],
    directions
});
//# sourceMappingURL=enum.js.map

/* ES6 中类的用法 */
var Animal = function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.isAnimal = function (a) {
        return a instanceof Animal;
    };
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return 'default Jack';
        },
        set: function (value) {
            console.log("ES6-setter: " + value);
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.say = function () {
        return "answer: " + this.name;
    };
    Animal.num = 42;
    return Animal;
}();
var Cat = function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        _super.call(this, name);
    }
    Cat.prototype.say = function () {
        return "Meow " + _super.prototype.say.call(this);
    };
    return Cat;
}(Animal);
var a = new Animal('Hello');
var c = new Cat('Tom');
var k = new Animal('Kitty');
k.name = 'kitty';
// console.log(`%cclass_ES6:${a.say()}`, 'color: red');
console.log("class_ES6:", {
    es6: a.say(),
    cat: c.say(),
    aSet: k.name,
    static: Animal.isAnimal(k)
});
//# sourceMappingURL=class_es6.js.map

var Animals = function () {
    // protected name;
    function Animals(name) {
        this.name = name;
    }
    return Animals;
}();
var a$1 = new Animals('Jack');
console.log('a.name', a$1.name);
a$1.name = 'Tom';
console.log('a.name2:', a$1.name);
var Cat$1 = function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        _super.call(this, name);
        console.log('Cat.name', this.name);
    }
    return Cat;
}(Animals);
var cat = new Animals('Cat');
console.log('cat:', cat.name);
var Title = function () {
    function Title(name) {
        this.name = name;
    }
    return Title;
}();
var SubTitle = function (_super) {
    __extends(SubTitle, _super);
    function SubTitle() {
        _super.apply(this, arguments);
    }
    SubTitle.prototype.header = function () {
        console.log("this is header " + this.name);
    };
    return SubTitle;
}(Title);
// let title = new Title('title name') // [ts] 无法创建抽象类“Title”的实例。
var title = new SubTitle('subTitle');
console.log('subTitle:', title.name);
//# sourceMappingURL=class.js.map

var Door = function () {
    function Door() {}
    return Door;
}();
var SecurityDoor = function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        _super.apply(this, arguments);
    }
    SecurityDoor.prototype.alerts = function () {
        console.log('SecurityDoor alert');
    };
    return SecurityDoor;
}(Door);
var point = { x: 1, y: 2, z: 3 };
console.log('class_interface', {
    point
});
function getCounter() {
    var counter = function (start) {};
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}
var c$1 = getCounter();
console.log('class_interface', {
    c10: c$1(10),
    c_reset: c$1.reset(),
    c_interval: c$1.interval = 5.0
});
//# sourceMappingURL=class_interface.js.map

// 实现一个函数 createArray，
// 它可以创建一个指定长度的数组，同时将每一项都填充一个默认值
// Array<any> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型
// 在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了
console.info('******************** generics *************************');
// function createArray (length: number, value: any): Array<any> {
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
console.log('generics:', {
    createArray: createArray(3, 'x')
});
// 定义泛型的时候，可以一次定义多个类型参数
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
console.log('genericsMulti', {
    swap: swap([7, 'seven'])
});
function logId(arg) {
    console.log('generics-logId:', arg.length); // 报错：[ts] 类型“T”上不存在属性“length”。
    return arg;
}
logId('7');
// 使用了两个类型参数，其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
var x = { a: 1, b: 2, c: 3, d: 4 };
console.log('generics-copy:', {
    copyFields: copyFields(x, { b: 10, d: 20 })
});
var createArr;
createArr = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
console.log('generic-arr', {
    createArr: createArr(5, 'x')
});
var GenericNumber = function () {
    function GenericNumber() {}
    return GenericNumber;
}();
var numTotal = new GenericNumber();
numTotal.zeroValue = 0;
numTotal.add = function (x, y) {
    return x + y;
};
console.log('numTotal', {
    zero: numTotal.zeroValue,
    add: numTotal.add(1, 2)
});
console.info('******************************************************');
//# sourceMappingURL=generics.js.map
//# sourceMappingURL=bundle.cjs.js.map
