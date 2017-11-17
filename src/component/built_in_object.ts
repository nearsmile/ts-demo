// ECMAScript 的内置对象
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;

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