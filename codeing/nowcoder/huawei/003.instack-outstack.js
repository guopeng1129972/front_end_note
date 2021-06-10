// 　　栈：后进先出（LIFO-last in first out）:最后插入的元素最先出来。
// 　　队列：先进先出（FIFO-first in first out）:最先插入的元素最先出来。
let instack = [],
  outstack = [];
function push(node) {
  // write code here
  instack.push(node);
}
function pop() {
  // write code here
  return instack.shift();
}
module.exports = {
  push: push,
  pop: pop,
};
