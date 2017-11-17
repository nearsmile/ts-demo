/* 元组 */
let mine: [string, number] = ['name', 20];

let custom: [string, number] = [];
custom[1] = 2;
custom.push('now');
mine[2] = 12;
mine.push(true) // [ts] 类型“true”的参数不能赋给类型“string | number”的参数。
// 当赋值或访问一个已知索引的元素时，会得到正确的类型
// 也可以只赋值其中一项
console.log('tuple', {
  name: mine[0],
  num: mine[1].toFixed(2),
  mine_over: mine[2],
  custom: custom[1]
});
