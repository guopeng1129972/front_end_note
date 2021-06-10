// let arr = [1, 2, 3, [4]];

const clone = (arr) => {
  let newarr = [];
  return (target = (arr) => {
    for (let i in arr) {
      if (Array.isArray(arr[i]) || typeof arr[i] === "object") {
        return target(arr[i]);
      } else {
        newarr.push(arr[i]);
      }
    }
    return newarr;
  })(arr);
};

export default clone;
