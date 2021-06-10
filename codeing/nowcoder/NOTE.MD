# nowcoder

## 编程题获取输入规则

### JavaScript(V8)

```js
// 持续获取输入
while ((line = readline())) {
  var lines = line.split(" ");
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  print(a + b);
}
// 获取行输入
// 获取全部
const arr = readline() 
// 获取分割
const arr = readline().split(' ')
const len=arr.length
console.log(arr[len-1].length)
```

### JavaScript(Node)

```js
var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("line", function (line) {
  var tokens = line.split(" ");
  console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});
```

## nowcoder/001.matchesPattern.js

题目描述
给定字符串 str，检查其是否符合如下格式
1、XXX-XXX-XXXX
2、其中 X 为 Number 类型

## nowcoder/002.isUSD.js

题目描述
给定字符串 str，检查其是否符合美元书写格式
1、以 $ 开始
2、整数部分，从个位起，满 3 个数字用 , 分隔
3、如果为小数，则小数部分长度为 2
4、正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3

## nowcoder/003.partial.js

题目描述
已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
1、返回一个函数 result，该函数接受一个参数
2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致

## nowcoder/004.useArguments.js

题目描述
函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，
返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。

## nowcoder/005.callIt.js

题目描述
实现函数 callIt，调用之后满足如下条件
1、返回的结果为调用 fn 之后的结果
2、fn 的调用参数为 callIt 的第一个参数之后的全部参数

## nowcoder/006.partialUsingArguments.js

题目描述
实现函数 partialUsingArguments，调用之后满足如下条件：
1、返回一个函数 result
2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数

## nowcoder/007.partialUsingArguments.js

题目描述
实现函数 partialUsingArguments，调用之后满足如下条件：
1、返回一个函数 result
2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数

## nowcoder/008.curryIt.js

题目描述
已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
4、调用 c 之后，返回的结果与调用 fn 的返回值一致
5、fn 的参数依次为函数 a, b, c 的调用参数
