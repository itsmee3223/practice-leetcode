// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Constraints:

// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000
// ==============================================================================
var levelOrder = function (root) {
  // If root is null return an empty array
  if (!root) return [];

  const queue = [root]; // initialize the queue with root
  const levels = []; // declare output array

  while (queue.length !== 0) {
    const queueLength = queue.length; // Get the length prior to dequeueing
    const currLevel = []; // Declare this level
    // loop through to exhaust all options and only to include nodes at currLevel
    for (let i = 0; i < queueLength; i++) {
      // Get next node
      const current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
      // After we add left and right for current, we add to currLevel
      currLevel.push(current.val);
    }
    // Level has been finished. Push into output array
    levels.push(currLevel);
  }
  return levels;
};

// We can use an inner for loop at each iteration of the while loop. When the loop begins, the length of the queue represents the # of nodes at the level. So by exhausting this length, we will only push the nodes into the queue that are all at the same level. The table below helped me understand a bit better whats going on.

// For example:
// Given binary tree [3,9,20,4,1,5,7,null,null,2,null,null,null],

//                3
//            ╱       ╲
//          ↙            ↘
//        9                20
//      ↙   ↘           ↙    ↘
//    4       1        5       7
//  ↙  ↘    ↙  ↘    ↙  ↘    ↙  ↘
//                 2
// Level Order Traversal = [[3], [9,20], [4,1,5,7], [2]]

// | Current | i <	| qLength |	queue     |	currLevel |	levels                        |
// | 3	     | 0	  | 1	      | [9,20]    |	[3] 	    | [[3]]                         |
// | 9	     | 0	  | 2	      |  [20,4,1]	| [9]	      | [3]                           |
// | 20	     | 1	  | 2	      | [4,1,5,7]	| [9,20]    |	[[3],[9,20]]                  |
// | 4       | 0	  | 4	      |  [1,5,7]	| [4]	      | [[3],[9,20]]                  |
// | 1	     | 1	  | 4	      |  [5,7]	  | [4,1]	    | [[3],[9,20]]                  |
// | 5       | 2	  | 4	      | [7,2]	    | [4,1,5]	  | [[3],[9,20]]                  |
// | 7	     | 3	  | 4	      |  [2]	    | [4,1,5,7]	| [[3],[9,20],[4,1,5,7]]        |
// |2	       | 0	  | 1	      | []	      | [2]	      | [[3],[9,20],[4,1,5,7],[2]]    |
