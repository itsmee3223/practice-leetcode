// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the
// frequency
//  of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

// Example 1:

// Input: candidates = [2,3,6,7], target = 7
// Output: [[2,2,3],[7]]
// Explanation:
// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
// 7 is a candidate, and 7 = 7.
// These are the only two combinations.
// Example 2:

// Input: candidates = [2,3,5], target = 8
// Output: [[2,2,2,2],[2,3,3],[3,5]]
// Example 3:

// Input: candidates = [2], target = 1
// Output: []

// Constraints:

// 1 <= candidates.length <= 30
// 2 <= candidates[i] <= 40
// All elements of candidates are distinct.
// 1 <= target <= 40

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  var buffer = [];
  var result = [];
  search(0, target);
  return result;

  function search(i, target) {
    if (target === 0) return result.push(buffer.slice());
    if (target < 0) return;
    if (i === candidates.length) return;

    buffer.push(candidates[i]);
    search(i, target - candidates[i]);
    buffer.pop();
    search(i + 1, target);
  }
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];

  candidates = candidates.sort();
  for (let i = candidates.length - 1; i > -1; i--) {
    const number = candidates[i];
    if (number > target) continue;
    if (number == target) {
      result.push([number]);
      continue;
    }

    let arr = combinationSum(candidates.slice(0, i + 1), target - number);
    for (let j = 0; j < arr.length; j++) {
      arr[j].push(number);
    }
    result = result.concat(arr);
  }

  return result;
};
