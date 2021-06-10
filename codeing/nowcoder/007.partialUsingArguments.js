// 1.es6
function partialUsingArguments(fn, ...args) {
  function result(...arg1) {
    return fn(...args, ...arg1);
  }
  return result;
}
//2.bind
function partialUsingArguments(fn) {
  return fn.bind(this, ...[...arguments].slice(1));
}
// 3.call
function partialUsingArguments(fn) {
  let tartget = [...arguments].slice(1);
  return function () {
    return fn.call(this, ...tartget, ...arguments);
  };
}
//4.apply
function partialUsingArguments(fn) {
  let tartget = [...arguments].slice(1);
  return function () {
    return fn.apply(this, tartget.concat(...arguments));
  };
}
// 5、bind + apply 方法
function partialUsingArguments(fn) {
  let tartget = [...arguments].slice(1);
  tartget.unshift(fn);
  return fn.bind.apply(fn, tartget);
}
