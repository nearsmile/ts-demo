/* ES6 中类的用法 */
class Animal {
  name: any;
  static num = 42;
  
  static isAnimal(a) {
    return a instanceof Animal
  }

  constructor (name) {
    this.name = name;
  }

  get name() {
    return 'default Jack'
  }

  set name(value) {
    console.log(`ES6-setter: ${ value }`)
  }

  say () {
    return `answer: ${ this.name }`;
  }
}

class Cat extends Animal { // 继承
  constructor(name) {
    super(name);
  }

  say () {
    return `Meow ${ super.say() }`
  }
}

let a: void = new Animal('Hello');
let c = new Cat('Tom')
let k = new Animal('Kitty')
k.name = 'kitty'

// console.log(`%cclass_ES6:${a.say()}`, 'color: red');
console.log(`class_ES6:`, {
  es6: a.say(),
  cat: c.say(),
  aSet: k.name,
  static: Animal.isAnimal(k)
});
