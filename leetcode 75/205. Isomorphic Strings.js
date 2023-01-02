// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.

// "egg", t = "add"
// ['e', 'e', 'g'] ['a', 'a', 'd']
// ==============================================================================
var isIsomorphic = function (s, t) {
  // check length
  if (s.length != t.length) {
    return false;
  }

  // initializing an object
  // to store letters from str1 and str2
  // as key value pairs
  var charCount = {};

  // initially setting c to "a"
  var c = "a";

  // iterating over str1 and str2
  for (var i = 0; i < s.length; i++) {
    // if str1[i] is a key in charCount
    if (charCount.hasOwnProperty(s[i])) {
      c = charCount[s[i]];
      if (c != t[i]) return false;
    }

    // if str2[i] is not a value in charCount
    else if (!Object.values(charCount).includes(t[i])) {
      charCount[s[i]] = t[i];
    } else return false;
  }
  return true;
};
// solution from another user
// ==============================================================================
// Runtime: 83 ms, faster than 88.18% of JavaScript online submissions for Isomorphic Strings.
// Time Complexity : O(n)
var isIsomorphic = function (s, t) {
  // Base case: for different length of two strings...
  if (s.length != t.length) return false;
  // Create two maps for s & t strings...
  const map1 = [256];
  const map2 = [256];
  // Traverse all elements through the loop...
  for (let idx = 0; idx < s.length; idx++) {
    // Compare the maps, if not equal, return false...
    if (map1[s.charAt(idx)] != map2[t.charAt(idx)]) return false;
    // Insert each character if string s and t into seperate map...
    map1[s.charAt(idx)] = idx + 1;
    map2[t.charAt(idx)] = idx + 1;
  }
  return true; // Otherwise return true...
};

isIsomorphic("egs", "add")

// s = [e, g, s]
// t = [a, d, d]

// map1 = [e:1, g:2]
// map2 = [a:1, d:2]
// idx = 2

// map1 = e -> 1
// map2 = a -> 1

// map1 = g -> 2
// map2 = d -> 2

// map1 = undefined
// map2 = 2

// map1 != map 2 return false