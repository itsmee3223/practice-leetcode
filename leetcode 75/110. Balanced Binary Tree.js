// Given a binary tree, determine if it is
// height-balanced
// .

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: true
// Example 2:

// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
// Example 3:

// Input: root = []
// Output: true

// Constraints:

// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// bottom to top O(n)
var isBalanced = function (root) {
  const dfs = (node) => {
    if (!node) return 0;
    const left = 1 + dfs(node.left);
    const right = 1 + dfs(node.right);
    const diff = Math.abs(left - right);
    const maxHeight = Math.max(left, right);

    return diff <= 1 ? maxHeight : Infinity;
  };

  return dfs(root) === Infinity ? false : true;
};

// top to bottom O(n^2)
var isBalanced = (root) => {
  if (!root) return true;

  const height = (node) => {
    if (!node) return 0;

    const left = height(node.left);
    const right = height(node.right);
    const maxHeight = 1 + Math.max(left, right);

    return maxHeight;
  };

  const left = height(root.left);
  const right = height(root.right);

  const diff = Math.abs(left - right);

  return diff <= 1 && isBalanced(root.left) && isBalanced(root.right);
};
