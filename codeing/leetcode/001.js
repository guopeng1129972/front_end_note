/** 1. Two Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
        if (target==nums[i]+nums[j]&&i!==j)
          return [i, j];
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log(twoSum([2,5,5,11], 10));