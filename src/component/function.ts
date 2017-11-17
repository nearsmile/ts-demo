
function sum(x: number, y: number): number {
  return x + y;
}

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};
// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = function(source: string, subString: string) {
  return source.search(subString) !== -1;
}
// 可选参数后面不允许再出现必须参数
function buildName(firstName: string = 'first', lastName?: string) {
  return lastName ? `${firstName} ${lastName}` : firstName
}

// 剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach(item => {
    array.push(item);
  });
}

// 重载 - 允许一个函数接受不同数量或类型的参数时，作出不同的处理
// TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  return typeof x === 'number' 
   ? Number(x.toString().split('').reverse().join(''))
   : typeof x === 'string' ? x.split('').reverse().join('') : ''
}

console.log('function:', {
  reverse_num: reverse(12345)
});

export {
  sum,
  mySum,
  mySearch,
  buildName,
  push,
  reverse
}
