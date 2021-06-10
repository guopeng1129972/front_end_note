// for 双循环
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++)
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
    }
  // write code here
}
module.exports = {
  twoSum: twoSum,
};
// new map
{
  function twoSum(numbers, target) {
    const map = new Map();
    for (let i = 0; i < numbers.length; i++) {
      if (map.has(numbers[i])) {
        return [map.get(numbers[i]) + 1, i + 1];
      } else {
        map.set(target - numbers[i], i);
      }
    }
  }
}
