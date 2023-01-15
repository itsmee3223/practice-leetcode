// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Constraints:

// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].
// ==============================================================================
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (str) {
  let stack = [];
  let currStr = "";
  let currNum = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[") {
      stack.push(currStr);
      stack.push(currNum);
      currStr = "";
      currNum = 0;
    } else if (str[i] === "]") {
      let prevNum = stack.pop();
      let prevStr = stack.pop();
      currStr = prevStr + currStr.repeat(prevNum);
    } else if (!isNaN(str[i])) {
      currNum = `${currNum}${str[i]}`;
    } else {
      currStr += str[i];
    }
  }
  return currStr;
};
/*

"3[a]2[bc]"

""
0
[]

""
03
[]

""
0
[ '', '03' ]

a
0
[ '', '03' ]

aaa
0
[]

aaa
02
[]

""
0
[ 'aaa', '02' ]

b
0
[ 'aaa', '02' ]

bc
0
[ 'aaa', '02' ]

*/
// solution from another user using
// =============================================================================
const decodeString = (s) => {
  const stack = [];
  for (const char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    let cur = stack.pop();
    let str = "";
    while (cur !== "[") {
      str = cur + str;
      cur = stack.pop();
    }
    let num = "";
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }

  return stack.join("");
};
// solution from another user using regex
// =============================================================================
const decodeString = (s) => {
  while (s.includes("[")) {
    s = s.replace(/(\d+)\[(\w+)\]/g, (_, number, word) => word.repeat(number));
  }
  return s;
};

console.log(decodeString("3[a]2[bc]"));
