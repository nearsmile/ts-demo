// 枚举（Enum）类型用于取值被限定在一定范围内的场景
// 枚举成员会被赋值为从 0 开始递增的数字，同时也会对枚举值到枚举名进行反向映射

// 可以给枚举项手动赋值
// 未手动赋值的枚举项会接着上一个枚举项递增
// 未手动赋值的枚举项与手动赋值的可以重复，会覆盖
// 手动赋值的枚举项可以不是数字，此时需要使用类型断言来让tsc无视类型检查
// 手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
enum Days { Sun = 7, Mon = 1.5, Tue, Wed, Thu = 1, Fri, Sat = -<any>'string now' }

console.log('enum:', {
  Sun: Days['Sun'],
  Mon: Days[1],
  Tue: Days[2],
  Wed: Days[3],
  Thu: Days[4],
  Fri: Days[5],
  Sat: Days['Sat']
})

enum Color { Red, Green, Blue = 'blue'.length } // "blue".length 就是一个计算所得项

const enum Directions { Up, Down, Left, Right }
// declare const enum Direction { Up, Down, Left, Right }
let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// let direction = [Direction.Up, Direction.Down, Direction.Left, Direction.Right]
console.log('enum2:', {
  color: Color['Blue'],
  directions,
  // direction
})
