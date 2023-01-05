// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// Constraints:

// 1 <= s.length <= 2000
// s consists of lowercase and/or uppercase English letters only.
// ==============================================================================
var longestPalindrome = function (s) {
  let longestLength = 0;
  let keys = {};

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) longestLength += 2;
    console.log(longestLength);
  }
  return s.length > longestLength ? longestLength + 1 : longestLength;
};
/* 
s = "abbbccccdd"
longestLength = 0
keys = {}

loop through string check if char is already appear or not
if already appear add 1 value to it
if not set to 1

keys[a] = keys[a] ? keys[a] + 1: 0 + 1
keys[a] = 1

check if keys char is even or odd
if even longest length + 2
longestLength = 2

after loop end
longestLength = 6

check if s length is greater than longestLength to insert 1 random char from the string to middle of Palindrome
8 > 6 ? 
if greater than the answer is longestLength + 1
6 + 1
if not then the answer is longestLength
6

after check then return longestLength
longestLength = 7
*/

// solution from another user
// ==============================================================================
var longestPalindrome = function (s) {
  let cpt = 0;
  let hash = new Map();

  for (const char of s) {
    hash.set(char, ~~hash.get(char) + 1);
    if (hash.get(char) % 2 == 0) cpt += 2;
  }

  return s.length > cpt ? cpt + 1 : cpt;
};

console.log(longestPalindrome("abccccdd"));
