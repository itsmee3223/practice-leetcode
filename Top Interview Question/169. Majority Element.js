// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109

// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  var obj = {};

  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] + 1 || 1;
    if (obj[nums[i]] > nums.length / 2) return nums[i];
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = {}; // mapping of element to it's frequency
  for (n of nums) {
    count[n] ? count[n]++ : (count[n] = 1);
    if (count[n] > nums.length / 2) return n;
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let element = 0;

  for (i = 0; i < nums.length; i++) {
    if (count === 0) {
      element = nums[i];
    }
    if (nums[i] === element) {
      count++;
    } else {
      count--;
    }
  }
};
