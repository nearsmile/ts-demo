/* 简单例子 */
// 实现门中的防盗门与车都有的报警器功能
// 类实现接口
interface Alarm {
  alerts();
}

class Door {
 }

class SecurityDoor extends Door implements Alarm {
  alerts() {
    console.log('SecurityDoor alert');
  }
}

// 一个类可以实现多个接口
interface Light {
  lightOn();
  lightOff();
}

class Car implements Alarm, Light {
  alerts () {
    console.log('car alert');
  }

  lightOn () {
    console.log('car light on');
  }

  lightOff () {
    console.log('car light off');
  }
}

// 接口与接口之间可以是继承关系
// 使用 extends 使 LightableAlarm 继承 Alarm
interface LightableAlarm extends Alarm {
  lightOn();
  lightOff();
}

// 接口继承类
class Point {
  x: number;
  y: number;
}

interface Point3d extends Point {
  z: number;
}

let point: Point3d = { x: 1, y: 2, z: 3 };
console.log('class_interface', {
  point
})

// 混合类型
// 一个函数还可以有自己的属性和方法
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () {};
  return counter;
}

let c = getCounter();

console.log('class_interface', {
  c10: c(10),
  c_reset: c.reset(),
  c_interval: c.interval = 5.0
})