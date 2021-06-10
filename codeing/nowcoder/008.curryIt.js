// 1.柯里化
function curryIt(fn) {
  let args = [];

  return function curried(arg) {
    args.push(arg);
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (arg2) {
        return curried.call(this, arg2);
      };
    }
  };
}
// 2.es6 这个严格的来说也不能是柯里化
var curryIt = (fn) => (a) => (b) => (c) => fn.apply(this, [a, b, c]);

// test
var fn = function (a, b, c) {
  return a + b + c;
};
return curryIt(fn).length;
