// 问题：需要在还不确定类型的时候就访问其中一个类型的属性或方法
// 使用类型断言，将 something 断言成 string
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
function getLength(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}

console.log('type_assertion:', {
  getLength: getLength(123)
})
