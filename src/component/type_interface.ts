let auto = 'string';
auto = 12; // 默认了String,因而报错

let autoAny;
autoAny = 's'; // 默认any
autoAny = 12;

console.log('type_interface:', {
  auto,
  auto_typeof: typeof auto,
  autoAny
})