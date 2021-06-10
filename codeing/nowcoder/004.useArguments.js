{
  // 1. for 常规
  function useArguments() {
    var sum = 0;
    // 关键的点就是arguments 是类数组不能直接调用array的方法
    var arr = Array.prototype.slice.call(arguments);
    for (var i = 0; i < arr.length; i++) {
      sum = arr[i] + sum;
    }
    return sum;
  }
}
{
  // 2.es6
  function useArguments(...args) {
    return [...args].reduce((a, b) => {
      return a + b;
    }, 0);
  }
}
// 我想到了那个类似的实现柯里化的题目
{
  function foo(...args) {
    const target = (...arg1s) => foo(...[...args, ...arg1s]);
    target.getValue = () => args.reduce((p, n) => p + n, 0);
    return target;
  }
  var f1 = foo(1, 2, 3);
  f1.getValue();
  // 6 输出是参数的和
  var f2 = foo(1)(2, 3);
  f2.getValue();
  // 6
  var f3 = foo(1)(2)(3)(4);
  f3.getValue();
  // 10
}
