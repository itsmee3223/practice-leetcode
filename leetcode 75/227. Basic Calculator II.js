// Given a string s which represents an expression, evaluate this expression and return its value.

// The integer division should truncate toward zero.

// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Example 1:

// Input: s = "3+2*2"
// Output: 7
// Example 2:

// Input: s = " 3/2 "
// Output: 1
// Example 3:

// Input: s = " 3+5 / 2 "
// Output: 5

// Constraints:

// 1 <= s.length <= 3 * 105
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 231 - 1].
// The answer is guaranteed to fit in a 32-bit integer.


/**
 * @param {string} s
 * @return {number}
 */
const calculate = (s) => {
  if (s == null || s.length === 0) return null;

  // remove space
  s = s.replace(/\s/g, "");

  let st = [];
  let n = 0;
  let sign = "+";

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    // number
    if (/\d/.test(c)) n = n * 10 + Number(c); // e.g. '14' -> 1 * 10 + 4

    // sign or last number
    if (/\D/.test(c) || i === s.length - 1) {
      if (sign === "-") st.push(-n);
      else if (sign === "+") st.push(n);
      else if (sign === "*") st.push(st.pop() * n);
      else if (sign === "/") st.push(~~(st.pop() / n));

      sign = c;
      n = 0;
    }
  }
  return st.reduce((a, b) => a + b);
};
