// 数组扁平化
var arr = [1, 3, 4, 5, [6, [0, 1, 5], 9], [2, 5, [1, 5]], [5]];

// 输出 [1, 3, 4, 5, 6, 0, 1, 5, 9, 2, 5, 1, 5, 5]
export default toFlat = (arr) => {
  let result = [];
  let target = (arr) => {
    for (let i in arr) {
      if (Array.isArray(i)) {
        return target(i);
      } else {
        result.push(i);
      }
    }
  };
  return result;
};

//手动迭代
var result = [];
function unfold(arr) {
  arr.forEach(function (item) {
    if (Array.isArray(item)) {
      unfold(item);
    } else {
      result.push(item);
    }
  });
  return result;
}

unfold(arr);

// https://zhuanlan.zhihu.com/p/82906451

//使用reduce方法实现递归
const flatten = (arr) =>
  arr.reduce(
    (pre, cur) => pre.concat(Array.isArray(cur) ? flatten(cur) : cur),
    []
  );
//reduce 方法中给了初始值一个空数组，是为了能顺利执行concat方法let result=flatten(arr)

//方法3：

//使用toString,转化为字符串，然后可以直接使用split分割成扁平的字符串数组，最后再转化为整形数组

result = arr
  .toString()
  .split(",")
  .map((data) => +data);

// https://blog.csdn.net/xiaohu12685/article/details/80623622
