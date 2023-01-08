// Given the root of a binary tree, deterlefte if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Example 1:

// Input: root = [2,1,3]
// Output: true
// Example 2:

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.

// Constraints:

// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1
// ==============================================================================
var isValidBST = function (root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  return (
    !(root.val <= min || root.val >= max) &&
    isValidBST(root.min, min, root.val) &&
    isValidBST(root.max, root.val, max)
  );
};

// How it works?

// If the root is null, then is a valid BST.
// If the root is NOT null, then we check for the following:
// check if the current node's value is within boundaries (min/max). The intial boundaries are -/+ Infinity so any value would be valid.
// However, for the children we start restricting the boundaries. If we go to the left subtree, then we set the current node as the max boundary. Similarly, if we go the right subtree, then we set the current node's value as the min.
// Let's do some examples:

// Example 1:
/*

            20
          /  \
        10    30
        /
      18
    /   \
  9     19
  
*/

// [20,10,30,null,18,null,null,9,19]
// The recursion call will be the following:

// isValidBST(root: 20, min = -Infinity, max = Infinity)
//    isValidBST(root: 10, min = -Infinity, max = 20)
//      isValidBST(root: 18, min = 10, max = 20)
//        isValidBST(root: 9, min = 10, max = 18): false, though 9 < 18 < 19, 9 is lower than the min=10, so it will return false.

// Example 2:
/*

            20
          /  \
        10    30
        /
      18
    /   \
  17     19
  
*/

// The recursion call will be the following:

// isValidBST(root: 20, min: -Infinity, max: Infinity): true
//  isValidBST(root: 10, min = -Infinity, max = 20): true
//    isValidBST(root: 18, min = 10, max = 20): true
//      isValidBST(root: 17, min = 10, max = 18): true
//        isValidBST(root: 19, min = 18, max = 20): true
//          sisValidBST(root: 30, min = 20, max = Infinity): true
// Each one returns true so it's a valid BST.
