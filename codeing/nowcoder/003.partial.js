{
  // 1.匿名函数
  function partial(fn, str1, str2) {
    return function (str3) {
      return fn(str1, str2, str3);
    };
  }
}
{
  // 2.call
  function partial(fn, str1, str2) {
    let result = function (str3) {
      return fn.call(this, str1, str2, str3);
    };
    return result;
  }
}
{
  //3.apply
  function partial(fn, str1, str2) {
    let result = function (str3) {
      return fn.apply(this, [str1, str2, str3]);
    };
    return result;
  }
}
// 4.bind
{
  function partial(fn, str1, str2) {
    let result = function (str3) {
      return fn.bind(this, str1, str2)(str3);
    };
    return result;
  }
}
//5.bind
{
  function partial(fn, str1, str2) {
    return fn.bind(this, str1, str2);
  }
}
/* 
bind不加后面的括号返回的是函数，加上后面的括号返回的是函数值，
这也是bind和call和apply的主要区别，bind需要二次调用，
而call和apply返回的是函数值，是直接调用。这道题让我更理解了三者的区别。
 */
// test:
var sayIt = function (greeting, name, punctuation) {
  return greeting + ", " + name + (punctuation || "!");
};

partial(sayIt, "Hello", "Ellie")("!!!");

// Hello, Ellie!!!
