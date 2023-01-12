// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.
// ================================================================================
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const arr = [];
  const obj = {};

  for (let i of p) {
    obj[i] ? (obj[i] += 1) : (obj[i] = 1);
  }

  let left = 0;
  let right = 0;
  let count = p.length;

  while (right < s.length) {
    if (obj[s[right]] > 0) count--;

    obj[s[right]]--;
    right++;

    if (count === 0) arr.push(left);

    if (right - left == p.length) {
      if (obj[s[left]] >= 0) count++;

      obj[s[left]]++;
      left++;
    }
  }
  return arr;
};
// solution from another user
// ==============================================================================
// The idea
// Build a hash map consists of characters and their counts. Save the # of unique characters as uniqueChars
// Iterate the input s using 2 pointers left and right. Make adjustments in hash and uniqueChars
// Keep expanding the right pointer. When the desired searching length is reached, we can start shrinking left pointer as well.
// Unlike other sliding window problems, left pointer, at max, would only move 1 position.
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let hash = {},
    uniqueChars = 0;
  for (let c of p) {
    if (hash[c] == null) {
      uniqueChars++;
      hash[c] = 1;
    } else {
      hash[c]++;
    }
  }

  let res = [];
  let left = 0,
    right = 0;
  for (right; right < s.length; right++) {
    if (hash[s[right]] != null) hash[s[right]]--;
    if (hash[s[right]] == 0) uniqueChars--;
    if (uniqueChars == 0) res.push(left);
    if (right - left + 1 == p.length) {
      if (hash[s[left]] != null) hash[s[left]]++;
      if (hash[s[left++]] == 1) uniqueChars++;
    }
  }
  return res;
};
// solution from another user
// ==============================================================================
var findAnagrams = function (s, p) {
  if (!s || s.length < p.length) return [];

  // Result is the output array that stores start indices,
  // freqMap maps each character in p to its count

  const result = [],
    freqMap = {};
  let count = 0,
    start = 0,
    end = 0;

  for (let char of p) {
    if (freqMap[char] === undefined) count++;
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  // Iterate over s using two pointers (start and end)
  while (end < s.length) {
    let char = s[end]; // The 'current' character
    // If the current character exists in the frequency map, then decrement it's count
    // and if the count reaches 0, then we know we got the right # of occurences for it
    if (freqMap[char] !== undefined) {
      freqMap[char] -= 1;
      if (freqMap[char] === 0) count--;
    }

    end++;

    // Once we reach count = 0, then check to see if it is
    // a valid anagram and move the window to the right
    while (count === 0) {
      let temp = s[start];
      if (freqMap[temp] !== undefined) {
        freqMap[temp] += 1;
        if (freqMap[temp] > 0) count++;
      }

      // If it is valid, then add the start index to the result
      if (end - start === p.length) result.push(start);
      start++;
    }
  }

  return result;
};
