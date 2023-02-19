// Given two strings s and t of lengths m and n respectively, return the minimum window
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let min = "",
    left = 0,
    right = -1;
  const map = {};

  for (const c of t) {
    map[c] = map[c] + 1 || 1;
  }

  let count = Object.keys(map).length;

  while (right < s.length) {
    if (count === 0) {
      let current = s[left];

      if (map[current] != null) map[current]++;
      if (map[current] > 0) count++;

      let tmp = s.substring(left, right + 1);
      if (min === "") min = tmp;
      else min = min.length < tmp.length ? min : tmp;
      left++;
    } else {
      right++;
      const current = s[right];
      if (map[current] != null) map[current]--;
      if (map[current] == 0) count--;
    }
  }

  return min;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  let count = new Int32Array(128);

  for (let i = 0; i < t.length; i++) count[t.charCodeAt(i)]++;

  let total = t.length;
  let start = 0;
  let min = Infinity;

  for (let lo = 0, hi = 0; hi < s.length; hi++) {
    if (count[s.charCodeAt(hi)]-- > 0) total--;
    while (total === 0) {
      if (hi - lo + 1 < min) {
        min = hi - lo + 1;
        start = lo;
      }
      if (++count[s.charCodeAt(lo++)] > 0) total++;
    }
  }
  return min === Infinity ? "" : s.slice(start, start + min);
};

/**
    t = ABBC
    s = WAWQACRBKLBAOCPRRAOBC  
    A    |  |      |     |
    B          |  |        |
    C        |       |      |

ABBC (1)    || |  |             
            ACRBKLB
     (2)     | |  ||
             CRBKLBA
     (3)       |  || |
               BKLBAOC

 */
