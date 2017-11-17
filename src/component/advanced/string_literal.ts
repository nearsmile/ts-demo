// 字符串字面量类型
// 字符串字面量类型用来约束取值只能是某几个字符串中的一个

type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
  // do something
}
// handleEvent(document.getElementById('app'), 'scroll');
// handleEvent(document.getElementById('root'), 'dlclick') // 报错：没定义，只能取三种字符串中的一种