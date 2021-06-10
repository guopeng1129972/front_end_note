while ((num = parseInt(readline()))) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let temp = parseInt(readline());
    arr[temp] = 1;
  }
  arr.forEach((val, index) => {
    if (val === 1) {
      console.log(index);
    }
  });
}
// 明明的随机数
while ((n = readline())) {
  var arr = [];
  while (n--) {
    // 循环接收下面的输入，并且根据输入的最大值来限制
    var index = readline();
    // 这块很牛逼 我没想到 用数组的特性去接受输入
    arr[index] = 1;
  }
  // 显示输出
  arr.forEach(function (val, index) {
    if (val == 1) {
      console.log(index);
    }
  });
}
while ((n = readline())) {
  // 循环接收输入
  // 只要这样就可以了
}
// 字符串分隔
while ((str = readline())) {
  str += "0000000";
  const len = Math.floor(str.length / 8);
  for (let i = 0; i < len; i++) {
    console.log(str.substr(i * 8, 8));
  }
}
// 进制转换
// 牛客内没有toString的方法，但是有parseInt的方法
while ((n = readline())) {
  console.log(parseInt(n, 16));
}
// 质数因子
let num = parseInt(readline());
let result = "";
for (let i = 2; i * i <= num; i++) {
  while (num % i === 0) {
    result += i + " ";
    num /= i;
  }
}
if (num > 1) {
  result += num + " ";
}
console.log(result);
