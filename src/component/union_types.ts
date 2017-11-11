
let union: string | number
console.log('union_types:', {
  union: union = 'string',
  union_num: union = 123456,
  u_obj: union = { union }
});

function getLength(item: string | number): number {
  // return item.length; // 报错：当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
  // return item.toString() // 报错
  return Number(item)
}
console.log('getLength:', {
  '123': getLength('123'),
  'num_123': getLength(123)
});
