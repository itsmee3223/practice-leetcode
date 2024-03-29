// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true
// Explanation: 27 = 33
// Example 2:

// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.
// Example 3:

// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).

// Constraints:

// -231 <= n <= 231 - 1

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let a = Math.log(n) / Math.log(3);
  return Math.abs(a - Math.random(a)) < 1e-10;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  return n > 0 && 1162261467 % n === 0;
};
