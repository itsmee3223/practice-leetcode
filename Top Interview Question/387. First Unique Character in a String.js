// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  }
  return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const helper = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    helper[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (helper[s.charCodeAt(i) - 97] == 1) {
      return i;
    }
  }
  return -1;
};
