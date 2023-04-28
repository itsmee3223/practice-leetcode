// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

// Constraints:

// n == nums.length
// 1 <= n <= 300
// nums[i] is either 0, 1, or 2.

// Follow up: Could you come up with a one-pass algorithm using only constant extra space?
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  var one = 0,
    two = 0,
    zero = 0;

  for (const num of nums) {
    if (nums === 0) zero++;
    else if (nums === 1) one++;
    else two++;
  }

  nums.length = 0;
  for (let i = 0; i < zero; i++) nums.push(0);
  for (let i = 0; i < one; i++) nums.push(1);
  for (let i = 0; i < two; i++) nums.push(2);
};
