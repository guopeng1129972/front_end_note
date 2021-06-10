// let arr = [1, 2, 3, 4, 5, 5, 6, 7, 7, 7];
export default quchong0 = (arr) => {
  // 去重的{}实现，不仅可以去重，还进行了排序
  function quchong(arr) {
    let obj = {};
    let resultArr = [];
    for (let i in arr) {
      obj[arr[i]] = 1;
    }
    // for in 的i是循环对象的key
    for (let i in obj) {
      if (obj.i == 1) {
        resultArr.push(i);
      }
    }
    return resultArr;
  }
  quchong(arr);
};
