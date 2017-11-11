/* 接口 interfaces */
interface Person {
  // readonly id: string,
  name: string;
  age?: number;
  [propName: string]: any; // 任意属性
}

let me: Person = {
  id: '01',
  name: 'Yang',
  age: 18
  // test: 123 // error: 多一些属性也是不允许的, 赋值的时候，变量的形状必须和接口的形状保持一致
};

// me.id = 2; // [ts] Cannot assign to 'id' because it is a constant or a read-only property.
console.log('interface:', {
  me
});
