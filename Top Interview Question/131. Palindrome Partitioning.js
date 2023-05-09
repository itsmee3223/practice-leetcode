// Given a string s, partition s such that every
// substring
//  of the partition is a
// palindrome
// . Return all possible palindrome partitioning of s.

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  function isPalindrome(str) {
    let left = 0,
      right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  const result = [];

  function permute(arr, str) {
    if (!str.length) result.push(arr);

    for (let i = 1; i <= str.length; i++) {
      const subStr = str.slice(0, i);
      if (isPalindrome(subStr)) {
        permute([...arr, subStr], str.slice(i));
      }
    }
  }
  permute([], s);
  return result;
};
