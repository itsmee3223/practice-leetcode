// // Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// // Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

// // Example 1:

// // Input: root = [1,null,3,2,4,null,5,6]
// // Output: [1,3,5,6,2,4]
// Example 2:

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

// Constraints:

// The number of nodes in the tree is in the range [0, 104].
// 0 <= Node.val <= 104
// The height of the n-ary tree is less than or equal to 1000.

// Follow up: Recursive solution is trivial, could you do it iteratively?
// ==============================================================================
var preorder = function (root, output = []) {
  // Base case: if the tree is empty...
  if (!root) return output;
  // Push the value of the root node to the output...
  output.push(root.val);
  // Recursively traverse each node in the children array...
  for (let child of root.children) {
    preorder(child, output);
  }
  return output; // Return the output result...
};

/*

child = {
  val: 3,
  children: [ { val: 5, children: [] }, { val: 6, children: [] } ]
} , output = [ 1 ]
child = { val: 5, children: [] }, output = [ 1, 3 ]
child = { val: 6, children: [] }, output = [ 1, 3, 5 ]
child = { val: 2, children: [] }, output = [ 1, 3, 5, 6 ]
child = { val: 4, children: [] } output = [ 1, 3, 5, 6, 2 ]

*/
// solution from another user using iterartive
// ==============================================================================
var preorder = function (root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
    const next = stack.pop();
    result.push(next.val);

    while (next.children.length) {
      stack.push(next.children.pop());
    }
  }

  return result;
};
// solution from another user using recursive
// ==============================================================================
var preorder = function (root) {
  if (root === null) return [];
  let array = [root.val];
  for (let child of root.children) {
    if (child.children.length === 0) array.push(child.val);
    else array = array.concat(preorder(child));
  }
  return array;
};
