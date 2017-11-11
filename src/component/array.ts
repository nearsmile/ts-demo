/* 数组 */
let list: number[] = [1, 2, 3];

// list = ['1', '12']; //  Type 'string' is not assignable to type 'number'
// list.push('s'); // [ts] Argument of type '"s"' is not assignable to parameter of type 'number'.

let list_union: (number | string)[] = ['1', 2, 3];

// 数组泛型
let generic: Array<string> = ['q', 'a', 'z'];

// 用 any 表示数组中允许出现任意类型
const any: any[] = ['xx', 1, { obj: 'obj' }]

console.log('Array', {
  list,
  generic,
  list_union,
  any
});
