// 接口的合并
interface Alarms {
  price: number;
  alert: (s: string) => string;
}

interface Alarms {
  weight: number;
  price: number; // 虽然重复了，但是类型都是 `number`，所以不会报错
  // price: string; // [ts] 后续变量声明必须属于同一类型。变量“price”必须属于类型“number”，但此处却为类型“string”。
  alert: (s: string, n: number) => string;
}