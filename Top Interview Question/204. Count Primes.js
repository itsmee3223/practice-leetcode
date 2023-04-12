// Given an integer n, return the number of prime numbers that are strictly less than n.

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0

// Constraints:

// 0 <= n <= 5 * 106

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let isPrime = new Array(n).fill(true);
  isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j += i) isPrime[j] = false;
  }

  let count = 0;
  for (let i = 1; i < n; i++) {
    if (isPrime[i]) count++;
  }

  return count;
};

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n < 3) return 0;

  const count = new Uint8Array(n);
  let res = 1;

  for (let i = 3; i < n; i += 2) {
    if (!count[i]) {
      res++;
      for (let j = i * i; j < n; j += 2 * i) {
        count[j] = 1;
      }
    }
  }

  return res;
};
