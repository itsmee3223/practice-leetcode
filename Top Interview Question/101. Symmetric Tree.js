// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

// Example 1:

// Input: root = [1,2,2,3,4,4,3]
// Output: true
// Example 2:

// Input: root = [1,2,2,null,3,null,3]
// Output: false

// Constraints:

// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100

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
var isSymmetric = (root) => {
  if (!root) return true;
  return isSame(root.left, root.right);
};

var isSame = (leftRoot, rightRoot) => {
  if (
    (!leftRoot && rightRoot) ||
    (leftRoot && !rightRoot) ||
    (leftRoot && rightRoot && leftRoot.val !== rightRoot.val)
  )
    return false;

  if (leftRoot && rightRoot) {
    return (
      isSame(leftRoot.left, rightRoot.right) &&
      isSame(leftRoot.right, rightRoot.left)
    );
  }

  return true;
};

var isSame = (left, right) => {
  if (left === null || right === null) return false;
  if (left === null && right === null) return true;

  if (left.val === right.val) {
    return isSame(left.left, right.right) && isSame(left.right, right.left);
  } else {
    return false;
  }
};
