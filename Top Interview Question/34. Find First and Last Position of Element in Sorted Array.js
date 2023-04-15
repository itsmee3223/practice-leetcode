// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    nums[mid] >= target ? (r = mid) : (l = mid + 1);
  }

  if (nums[l] !== target) return [-1, -1];
  let start = l;
  r = nums.length - 1;

  while (l < r) {
    let mid = Math.floor((l + r) / 2);
    nums[mid] <= target ? (l = mid + 1) : (r = mid);
  }

  let end = nums[l] === target ? l : l - 1;
  return [start, end];
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let firstPosition = getFirstPosition(nums, low, high, target);
  let lastPosition = getFirstPosition(nums, low, high, target + 1) - 1;
  if (firstPosition < nums.length && nums[firstPosition] == target) {
    return [firstPosition, lastPosition];
  }
  return [-1, -1];
};

function getFirstPosition(nums, low, high, target) {
  let mid;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}
