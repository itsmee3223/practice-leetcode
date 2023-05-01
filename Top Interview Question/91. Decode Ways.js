// A message containing letters from A-Z can be encoded into numbers using the following mapping:

// 'A' -> "1"
// 'B' -> "2"
// ...
// 'Z' -> "26"
// To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

// "AAJF" with the grouping (1 1 10 6)
// "KJF" with the grouping (11 10 6)
// Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

// Given a string s containing only digits, return the number of ways to decode it.

// The test cases are generated so that the answer fits in a 32-bit integer.

// Example 1:

// Input: s = "12"
// Output: 2
// Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: s = "226"
// Output: 3
// Explanation: "226" could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
// Example 3:

// Input: s = "06"
// Output: 0
// Explanation: "06" cannot be mapped to "F" because of the leading zero ("6" is different from "06").

// Constraints:

// 1 <= s.length <= 100
// s contains only digits and may contain leading zero(s).

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s, index = 0, memo = {}) {
  if (s.length < 1) return 0;
  let result = 0;
  if (index == s.length) return 1; // base case 1: reach the end = correct path
  if (memo[index] != null) return memo[index]; // base case 2: if we already have the information on this index, return it
  if (s[index] > 0) {
    // as long as its bigger than 0, we can at least  use it as a single digit
    result += numDecodings(s, index + 1, memo); // move forward by 1
  }

  // as long as 1. we are not starting with 0 etc. `04`
  //            2. our next digit isn't null
  //            3. we can form a two digit number thats smaller than 27
  if (s[index] != 0 && s[index + 1] != null && s[index] + s[index + 1] < 27) {
    // lets make this two digit together and move forward by 2
    result += numDecodings(s, index + 2, memo);
  }
  memo[index] = result; // given the current index, store how many different ways we can decode
  return result;
};
