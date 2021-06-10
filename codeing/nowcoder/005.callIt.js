// 1. apply + slice
function callIt(fn) {
  return fn.apply(null, [].slice.call(arguments, 1));
}
// 2. apply + splice
function callIt(fn) {
  return fn.apply(null, [].splice.call(arguments, 1));
}
// 3. apply + call
function callIt(fn) {
  return [].shift.call(arguments).apply(null, arrguments);
}
// 4. es6
function callIt(fn, ...args) {
  return fn(args);
}
// test
var a = 1;
b = 2;
var c = 3;
var test = function (first, second, third) {
  return first === a && second === b && third === c;
};
callIt(test, a, b, c);
