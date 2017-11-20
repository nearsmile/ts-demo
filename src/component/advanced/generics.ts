// 实现一个函数 createArray，
// 它可以创建一个指定长度的数组，同时将每一项都填充一个默认值
// Array<any> 允许数组的每一项都为任意类型。但是我们预期的是，数组中每一项都应该是输入的 value 的类型
// 在函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了

console.info('******************** generics *************************')
// function createArray (length: number, value: any): Array<any> {
function createArray<T> (length: number, value: T): Array<T> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value; 
  }
  return result;
}

console.log('generics:', {
  createArray: createArray(3, 'x')
});

// 定义泛型的时候，可以一次定义多个类型参数
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

console.log('genericsMulti', {
  swap: swap([7, 'seven'])
})

// 泛型约束：在函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
interface Lengthwise {
  length: number;
}

function logId<T extends Lengthwise>(arg: T): T {
  console.log('generics-logId:', arg.length) // 报错：[ts] 类型“T”上不存在属性“length”。
  return arg
}
logId('7');

// 使用了两个类型参数，其中要求 T 继承 U，这样就保证了 U 上不会出现 T 中不存在的字段
function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (<T>source)[id];
  }
  return target
}

let x = { a: 1, b: 2, c: 3, d: 4 }
console.log('generics-copy:', {
  copyFields: copyFields(x, { b: 10, d: 20 })
})

// 可以使用含有泛型的接口来定义函数的形状
// 可以把泛型参数提前到接口名上,此时在使用泛型接口的时候，需要定义泛型的类型
interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

let createArr: CreateArrayFunc<any>;
createArr = function<T>(length: number, value: T): Array<T> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

console.log('generic-arr', {
  createArr: createArr(5, 'x')
})

class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let numTotal = new GenericNumber<number>();
numTotal.zeroValue = 0;
numTotal.add = function(x, y) { return x + y };
console.log('numTotal', {
  zero: numTotal.zeroValue,
  add: numTotal.add(1, 2)
})
console.info('******************************************************')