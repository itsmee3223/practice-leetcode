// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

// ================================================================================

// my solution
var runningSum = function (nums) {
  var result = 0;
  nums.forEach((item, index, arr) => {
    result = result + arr[index];
    if (index == 0) {
      arr[index] = item;
    }
    arr[index] = result;
  });
  return nums;
};

// solution from another user
// ==============================================================================

// Time Complexity : O(n)
// Space Complexity : O(n)
var runningSum = function (nums) {
  // Create an output array of size equal to given nums size...
  let output = new Array(nums.length);
  // Set output[0] = nums[0]...
  output[0] = nums[0];
  // Traverse all elements through the for loop...
  for (let idx = 1; idx < nums.length; idx++) {
    // Storing the running sum...
    output[idx] = output[idx - 1] + nums[idx];
  }
  return output; // Return the running sum of nums...
};

// ==============================================================================
var runningSum = function (nums) {
  return nums.map(((acc = 0), (num) => (acc += num)));
};

console.log(runningSum([1, 2, 3, 4]));
