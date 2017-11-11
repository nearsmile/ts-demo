/* Boolean */
const isBoolean: boolean = Boolean(1)
console.log('Boolean:', {
  isBoolean
})
/* number */
const numOne: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o234;
const notNum: number = NaN;
const infinity: number = Infinity;

console.log('Number:', {
  numOne,
  hex,
  binary,
  octal,
  notNum,
  infinity
});
/* String */
const names: string = 'yang';
const setence: string = `hello, ${names} is ${numOne + 4} now`;

console.log('String:', {
  names,
  setence
})

/* 空值Void */
const alertTime = () => {
  // if (process.browser) window.alert(new Date())
  new Date()
}
// const unusable: void = undefined;
// const unNull: null = null;
// const undefineds: undefined = undefined;
// let u: void;
// let num: number = undefineds;

console.log({
  time: `time: ${alertTime()}`
  // unusable,
  // unNull
});

/* 元组 */
let tuple: [string, number] = ['ss', 11];
tuple[3] = 'sss';
console.log('tuple', {
  tuple,
  sub: tuple[0].substr(1),
  tuple_after: tuple,
  tuple_5: tuple[5]
});