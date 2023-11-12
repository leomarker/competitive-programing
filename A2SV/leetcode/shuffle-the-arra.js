/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let bucket1 = nums.slice(0, n);
  let bucket2 = nums.slice(n);

  let shuffled = [];

  for (let i = 0; i < bucket1.length; i++) {
    shuffled.push(bucket1[i], bucket2[i]);
  }

  return shuffled;
};
