// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let List = new ListNode(0); // Create a new singly Linked List node
  let head = List; // set the head of the linked list to the new node
  let sum = 0; // Keeps track of the sum
  let carry = 0; // Keeps track of the addition carrying

  while (l1 !== null || l2 !== null || sum > 0) {
    // Run loop while either list isnt null and the sum is greater than 0, this loop creates a new Node with the added sum as the value
    if (l1 !== null) {
      // If List 1 is not null...
      sum = sum + l1.val; // Add value of List 1 Node to the sum
      l1 = l1.next; // Move List 1 to the next node
    }
    if (l2 !== null) {
      // If List 1 is not null...
      sum = sum + l2.val; // Add value of List 2 Node to the sum
      l2 = l2.next; // Move List 2 to the next node
    }
    if (sum >= 10) {
      // If the sum creates a carry number for addition...
      carry = 1; // set carry to 1
      sum = sum - 10; // subtract 10 from the sum
    }

    head.next = new ListNode(sum); // Create a new node with the value sum
    head = head.next; // set the head as the next of the current head

    sum = carry; // set sum to carry to allow the next new node to include the carry over value
    carry = 0; // set carry to 0 to clear the carry over
  }

  return List.next; // Return List.next so it starts from the first node of the linked list
};
