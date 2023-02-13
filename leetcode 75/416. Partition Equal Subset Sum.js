// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or false otherwise.

// Example 1:

// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].
// Example 2:

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.

// Constraints:

// 1 <= nums.length <= 200
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((a, b) => a + b);
  if (sum % 2 === 1) return false;

  const target = sum / 2;
  const dp = Array(target + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  return dp[target] === target;
};

var canPartition = function (nums) {
  if (!nums) return false;
  let total = nums.reduce((a, b) => a + b, 0);

  if (total % 2 !== 0) return false;

  let target = total / 2;
  let cache = new Set();
  cache.add(0);

  for (let el of nums) {
    console.log("el", el);

    for (let i = target; i >= 0; i--) {
      let complement = i - el;

      if (!cache.has(i) && cache.has(complement)) {
        cache.add(i);
        console.log("condition 1:", complement, i);
        console.log(cache);
      }
      if (cache.has(target)) {
        console.log("condition 2:", complement, i);
        console.log(cache);
        return 1;
      }
    }
  }

  return false;
};
