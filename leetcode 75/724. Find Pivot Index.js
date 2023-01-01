// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Example 1:

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
// Example 2:

// Input: nums = [1,2,3]
// Output: -1
// Explanation:
// There is no index that satisfies the conditions in the problem statement.
// Example 3:

// Input: nums = [2,1,-1]
// Output: 0
// Explanation:
// The pivot index is 0.
// Left sum = 0 (no elements to the left of index 0)
// Right sum = nums[1] + nums[2] = 1 + -1 = 0

// Constraints:

// 1 <= nums.length <= 104
// -1000 <= nums[i] <= 1000

// Note: This question is the same as 1991: https://leetcode.com/problems/find-the-middle-index-in-array/

// ==============================================================================
var pivotIndex = function (nums) {
  // Input: nums = [1,7,3,6,5,6]
  let totalSum = 0;
  let leftSum = 0;

  nums.forEach((element) => (totalSum += element));
  for (let i = 0; i < nums.length; i++) {
    if (totalSum - leftSum - nums[i] === leftSum) {
      // totalSum - leftSum - nums[i] (28 - 0 - 1 = 27) = 0
      // totalSum - leftSum - nums[i] (28 - 1 - 7 = 20) = 1
      // totalSum - leftSum - nums[i] (28 - 8 - 3 = 17) = 8
      // totalSum - leftSum - nums[i] (28 - 11 - 6 = 11) = 11
      return i;
    }
    // leftSum = 0
    // leftSum = 1
    // leftSum = 8
    // leftSum = 11
    leftSum += nums[i];
  }
  return -1;
};

function Accumulation(arr) {
  return arr.reduce((a, b) => a + b);
}

// solution from another user
// ==============================================================================
var pivotIndex = function (nums) {
  // Initialization:
  // Left hand side be empty, and
  // Right hand side holds all weights.

  let totalWeightOnLeft = 0;
  let totalWeightOnRight = Accumulation(nums);

  for (let i = 0; i < nums.length; i++) {
    let currentWeight = nums[i];

    totalWeightOnRight -= currentWeight;

    if (totalWeightOnLeft == totalWeightOnRight) {
      // balance is met on both sides
      return i;
    }

    totalWeightOnLeft += currentWeight;
  }

  return -1;
};
