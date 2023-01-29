// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:

// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Example 2:

// Input: root = []
// Output: []
// Example 3:

// Input: root = [1]
// Output: [1]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = [];

  var inOrder = (root) => {
    if (!root) return;
    inOrder(root.left);
    result.push(root.val);
    inOrder(root.right);
  };

  inOrder(root);
  return result;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let currNode = root;

  while (currNode || stack.length) {
    if (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    } else {
      currNode = stack.pop();
      result.push(currNode.val);
      currNode = currNode.right;
    }
  }
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (!root) return [];
  return [
    ...inorderTraversal(root.left),
    root.val,
    inorderTraversal(root.right),
  ];
};
