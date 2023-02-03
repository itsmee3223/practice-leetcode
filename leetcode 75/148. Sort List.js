// iven the head of a linked list, return the list after sorting it in ascending order.

// Example 1:

// Input: head = [4,2,1,3]
// Output: [1,2,3,4]
// Example 2:

// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]
// Example 3:

// Input: head = []
// Output: []

// Constraints:

// The number of nodes in the list is in the range [0, 5 * 104].
// -105 <= Node.val <= 105

// Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const findMid = (head) => {
  let slow = head,
    fast = head.next;
  while (fast.next && fast) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

const merge = (l1, l2) => {
  let dummy = new ListNode(0);
  let ptr = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      ptr.next = l1;
      l1 = l1.next;
    } else {
      ptr.next = l2;
      l2 = l2.next;
    }
    ptr = ptr.next;
  }

  if (l1) {
    ptr.next = l1;
  }
  if (l2) {
    ptr.next = l2;
  }

  return dummy.next;
};

var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  const mid = findMid(head);
  const right = sortList(mid.next);
  mid.next = null;
  const left = sortList(head);

  return merge(left, right);
};

const sortList = (head) => {
  if (!head) return head;
  let nodeArr = [];
  while (head) {
    nodeArr.push(head);
    head = head.next;
  }

  nodeArr.sort((a, b) => {
    return a.val - b.val;
  });

  for (let i = 0; i < nodeArr.length; i++) {
    if (i === nodeArr.length - 1) {
      nodeArr[i].next = null;
    } else {
      nodeArr[i].next = nodeArr[i + 1];
    }
  }
  return nodeArr[0];
};
