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

function sum(x, y) {
    return x + y;
}
var mySum = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
// 可选参数后面不允许再出现必须参数
function buildName(firstName, lastName) {
    if (firstName === void 0) {
        firstName = 'first';
    }
    return lastName ? firstName + " " + lastName : firstName;
}
// 剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
function reverse(x) {
    return typeof x === 'number' ? Number(x.toString().split('').reverse().join('')) : typeof x === 'string' ? x.split('').reverse().join('') : '';
}

var arr = [];
push(arr, 1, 2, 3);
console.log('function:', {
    sum: sum(1, 2),
    mySum: mySum(2, 3),
    mySearch: mySearch('hello', 'e'),
    firs_last_name: buildName('first', 'last'),
    onlyName: buildName(undefined, 'only'),
    arr_push: arr,
    reverse_num: reverse(12345),
    reverse_string: reverse('hello world')
});
//# sourceMappingURL=main.js.map
//# sourceMappingURL=bundle.es.js.map
