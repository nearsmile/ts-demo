class Animals {
  // public name;
  private name: string;
  // protected name;
  public constructor(name: string) {
    this.name = name;
  }
}

let a: Animals = new Animals('Jack');
console.log('a.name', a.name);

a.name = 'Tom';
console.log('a.name2:', a.name);

class Cat extends Animals {
  constructor(name:string) {
    super(name);
    console.log('Cat.name', this.name)
  }
}

let cat: Cat = new Animals('Cat')
console.log('cat:', cat.name)

abstract class Title {
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  public abstract header(): string
}

class SubTitle extends Title {
  public header():string {
    console.log(`this is header ${ this.name }`)
  }
}
// let title = new Title('title name') // [ts] 无法创建抽象类“Title”的实例。
let title: SubTitle = new SubTitle('subTitle')
console.log('subTitle:', title.name);
