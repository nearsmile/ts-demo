/* 任意值（Any）用来表示允许赋值为任意类型 */
let anything: any = 'anything';
anything = 123;
console.log('anything', {
  anything,
  name: anything.name,
  // firstName: anything.setName('yang')
});
