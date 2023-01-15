// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.

// Follow up: Can you solve it in O(n) time and O(1) space?
// ==============================================================================
const process = (s) => {
  const res = [];
  for (x of s) {
    x === "#" ? res.pop() : res.push(x);
  }
  return res.join("");
};
var backspaceCompare = (S, T) => process(S) == process(T);

let S = "a#c",
  T = "b";
console.log(backspaceCompare(S, T));
// solution from another user using iterartive
// ==============================================================================
const backspaceCompare = (S, T) => {
  return edit(S) === edit(T);

  function edit(str) {
    let result = "";
    let backspaces = 0;

    for (let i = str.length - 1; i >= 0; i -= 1) {
      if (str[i] === "#") {
        backspaces += 1;
      } else if (backspaces > 0) {
        backspaces -= 1;
      } else {
        result = str[i] + result;
      }
    }

    return result;
  }
};

// The idea is that the result is easier to fill than to fill and cut, and since backspace removes previous values, then it's easier for us to turn it all around, in other words, go from the end.

// Since there can be several backspaces in a row, we cannot delete previous values, and the best solution would be a counter that will count how many backspaces should be applied to ordinary characters.

// To avoid repetition in the code, one function was written that applied the same editing method for both inputs.
