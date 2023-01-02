// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

// Constraints:

// 0 <= s.length <= 100
// 0 <= t.length <= 104
// s and t consist only of lowercase English letters.

// Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?
// ==============================================================================
var isSubsequence = function (s, t) {
  if (s.length == 0) return true;
  let charMatch = 0;
  for (i = 0; i < t.length; i++) {
    if (s[charMatch] === t[i]) {
      charMatch++;
    }
    if (charMatch === s.length) return true;
  }
  return false;
};
// s[0] = a, t[0] = a
// a === a, charmatch = 1

// s[1] = b, t[0] = a
// s[1] = b, t[1] = b
// b === b, charmatch = 2

// s[2] = c, t[0] = a
// s[2] = c, t[1] = b
// s[2] = c, t[2] = c
// c === c, charmatch = 3

// s.length === charMatch, return true
console.log(isSubsequence("abc", "abcs"));

// solution from another user
// ==============================================================================
var isSubsequence = function (s, t) {
  let b = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[b] === t[i]) {
      b++;
    }
  }

  return b === s.length;
};
