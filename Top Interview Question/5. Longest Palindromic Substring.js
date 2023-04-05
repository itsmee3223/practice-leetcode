// Given a string s, return the longest
// palindromic

// substring
//  in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var max = "";

  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;

      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }

      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
    if (Math.ceil(max.length / 2) >= s.length - i) break;
  }

  return max;
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var max = "";
  for (var i = 0; i < s.length; i++) {
    // this loop is to take into account
    // different palindromes like 'aba' and 'abba'
    for (var j = 0; j < 2; j++) {
      var left = i;
      var right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      // here imagine we get into string like
      // "sabbad", then
      // right = 5
      // left = 0
      // and actual length of "abba" should be "4"
      // 5 - 0 - 1 === 4
      var max = "";
      for (var i = 0; i < s.length; i++) {
        // this loop is to take into account
        // different palindromes like 'aba' and 'abba'
        for (var j = 0; j < 2; j++) {
          var left = i;
          var right = i + j;
          while (s[left] && s[left] === s[right]) {
            left--;
            right++;
          }
          // here imagine we get into string like
          // "sabbad", then
          // right = 5
          // left = 0
          // and actual length of "abba" should be "4"
          // 5 - 0 - 1 === 4
          if (right - left - 1 > max.length) {
            max = s.substring(left + 1, right);
          }
        }
      }
    }
  }
  return max;
};
