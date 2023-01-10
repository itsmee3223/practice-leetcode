// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45
// ==============================================================================
/*
n = 5
[][][][1][1]

n = 4
[][][2][1][1]

n = 3
[][3][2][1][1]

n = 2
[5][3][2][1][1]
*/
var climbStairs = function (n) {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    temp = one;
    one = one + two;
    two = temp;
    console.log(one, two, temp);
  }

  return one;
};
/*
one = 1, two = 1
n = 5
i = 0

looping i < n - 1
one = 2, two = 1, temp = 1, i = 0
one = 3, two = 2, temp = 2, i = 1
one = 5, two = 3, temp = 3, i = 2
one = 8, two = 5, temp = 5, i = 3

*/

console.log(climbStairs(5));
// ==============================================================================
var climbStairs = function (n) {
  // First two pointers store the first two numbers of the Fibonacci sequence
  let prev = 0;
  let curr = 1;
  // Our third pointer is used to store one side while we update the above two pointers.
  let tmp;

  // We use a for loop to iterate from 1 up to our number n with our constraints  being: 1 <= n <= 45
  for (let i = 1; i <= n; i++) {
    // We store one side in our third pointer
    tmp = prev;
    // We then update that side to be equal to the other pointer
    // This is because the next number is equal to the sum of the previous two numbers.
    prev = curr;
    // Next we add tmp which now holds our lower number to curr which holds our upper number to get our next number.
    curr += tmp;
  }
  // Outside of our loop we return curr which stored our cumulative total while we iterated.
  return curr;
};
