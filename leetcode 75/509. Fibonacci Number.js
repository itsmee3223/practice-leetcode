// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Constraints:

// 0 <= n <= 30
// ==============================================================================
// using recursive
var fib = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n - 1) + fib(n - 2);
};
// ==============================================================================
// Idea:
// The naive idea here would be to create an array of Fibonacci numbers by doing as the directions indicate: adding the two previous numbers together to find the next number.

// But we can find the answer here in O(1) space by instead just keeping track of only the previous two numbers (a, b) and rolling over the variable contents in a circular pattern.

// Since our rolling loop can only begin on the third number or later, we'll first have to deal with the early n-value edge cases with a special return statement.

// Update: Apparently there's a mathematical formula for Fibonacci numbers: Binet's formula (credit goes to this post from @busaeed).

// Binet's formula for the n'th Fibonacci number:

// Binet's Formula

// This formula can compute the solution in O(1) time as well as O(1) space.

// Implementation:
// There are only minor differences betwen the code of all four languages.

// Javascript Code:
// w/ Binet's formula:
var fib = function (n) {
  let sqrt5 = Math.sqrt(5);
  return (
    (Math.pow(1 + sqrt5, n) - Math.pow(1 - sqrt5, n)) / Math.pow(2, n) / sqrt5
  );
};
// w/ O(N) iteration:
var fib = function (n) {
  if (n < 2) return n;
  let a = 0,
    b = 1;
  for (let i = 1; i < n; i++) [a, b] = [b, a + b];
  return b;
};
