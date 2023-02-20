// Given the roots of two binary tress p and q, write a function to check if they are the same or not.

// Two binary tress are considered the same if they are structurally identical and the nodes have the same value.

// Example 1:
// Input : p = [1,2,3], q = [1,2,3]
// Output : true

const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
