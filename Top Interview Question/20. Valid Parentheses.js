// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
// ================================================================================
var isValid = (s) => {
  if (s.length % 2 !== 0) return false;

  const stack = [];

  for (const char of s) {
    console.log(stack);
    switch (char) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (char !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
};
// ================================================================================
// solution from another user
var isValid = (s) => {
  const stack = [];
  const map = {
    "[": "]",
    "(": ")",
    "{": "}",
  };

  for (const char of s) {
    if (map[char]) stack.push(map[char]);
    else if (char !== stack.pop()) return false;
  }

  return !stack.length;
};
console.log(isValid("[({({})})]"));
