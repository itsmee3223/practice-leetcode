// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s === null) return false;

  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (
      left < right &&
      !(
        (s.charAt(left) >= "a" && s.charAt(left) <= "z") ||
        (s.charAt(left) >= "0" && s.charAt(left) <= "9")
      )
    ) {
      left++;
    }
    while (
      left < right &&
      !(
        (s.charAt(right) >= "a" && s.charAt(right) <= "z") ||
        (s.charAt(right) >= "0" && s.charAt(right) <= "9")
      )
    ) {
      right--;
    }
    if (s.charAt(left) != s.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */

function isPalindrome(s) {
  let pattern = /[^a-zA-Z0-9]/g;
  // alternatively, let pattern = /\W/g;
  let cleanString = s.replace(pattern, "").toLowerCase();
  let reversedString = cleanString.split("").reverse().join("");
  return cleanString === reversedString;
}

/* 

Here's a breakdown of what each part of the regular expression means:

/ - The start of the regular expression pattern.
[^a-z0-9] - A character set that matches any character that is not a lowercase letter or a digit. The ^ symbol at the start of the set means "not". So this character set will match any character that is not in the range a to z or 0 to 9.
/ - The end of the regular expression pattern.
g - A global flag that makes the replace method replace all occurrences of the pattern in the string, instead of just the first occurrence.
So when we call s.replace(/[^a-z0-9]/g, ''), we are replacing all characters in the string that are not lowercase letters or digits with an empty string (i.e., we are removing those characters). This leaves us with a string that only contains alphanumeric characters.

alternatively, we can use /\W/g

Here's a breakdown of what each part of the regular expression means:

/ - The start of the regular expression pattern
\W - Character class that's shorthand for anything that matches anything that is NOT a word character (upper/lowercase a-z, 0-9, and underscore. the opposite would be \w, which matches anything that IS a word character)
/ - The end of the regular expression pattern
g - A global flag that makes the place method replace all occurrences of the pattern in the string, instead of just the first occurence

*/
