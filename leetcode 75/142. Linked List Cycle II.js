// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:
// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:
// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list

// Constraints:

// The number of the nodes in the list is in the range [0, 104].
// -105 <= Node.val <= 105
// pos is -1 or a valid index in the linked-list.

// Follow up: Can you solve it using O(1) (i.e. constant) memory?

// ================================================================================
// The strategy here is to use two pointers, one slow (1 node per iternation) and one fast( 2 nodes per iteration).

// First, we use the two pointer technique from Linked List Cycle to determine IF there is a cycle.

// If we discover a cycle we know a few things.

// The slow pointer and the fast pointer are at the same node.
// The fast pointer has traveled a further distance than the slow node.
// Envision a cycle set up like this....

// Initial Setup

// S          5->6
// F         /    \
// 0->1->2->4      7
//           \    /
//            9<-8
// Iteration 1

//            5->6
//    S  F   /    \
// 0->1->2->4      7
//           \    /
//            9<-8
// Iteration 2

//            F
//            5->6
//       S   /    \
// 0->1->2->4      7
//           \    /
//            9<-8
// Iteration 3

//            5->6
//          S/    \
// 0->1->2->4      7F
//           \    /
//            9<-8
// Iteration 4

//            S
//            5->6
//           /    \
// 0->1->2->4      7
//           \    /
//           F9<-8
// Iteration 5

//            F  S
//            5->6
//           /    \
// 0->1->2->4      7
//           \    /
//            9<-8
// Iteration 6

//            5->6
//           /    \
// 0->1->2->4      7SF
//           \    /
//            9<-8

// If we followed the two pointer technique to discover a cycle we would find that the slow pointer and the fast pointer meet at node 7.

// Knowing this allows us to make a formula that gives us our answer.

// D = the distance from the beginning of the linked list to the node that starts the cycle ( ie - 0->1->2->4

// P = the distance from the node that starts the cycle to the position where the slow pointer equals the fast pointer . 4->5->6->7

// X = the total distance from the beginning of the list to P 0->1->2->4->5->6->7

// R = the remaining distance from P back to D 7->8->9->4

// T = the total distance from the beginning of the list to the node that starts the cycle 0->1->2->4->5->6->7->8->9->4

//  |--------X--------|
//  |----D---|----P---|---R---|
//  0->1->2->4->5->6->7->8-9->4....
//  |-----------T-------------|
// Give that both pointers are at node 7, we know that...
// Slow = 1X = D + P
// Fast = 2X = 2D + 2P

// We can also deduce that...
// T = 2D + 2P - P therefore T = 2D + P

// Knowing this we can tell that...
// R = T - P - D

// Substituting what we know about T we can now tell that ...
// R = 2D + P - P - D

// finally...
// R = D

// Now we know... the distance from where we discover a cycle to the node that starts the cycle IS EQUAL TO the distance from the beginning of the list to the node that starts the cycle.

// Knowing this we reset the slow pointer to the head of the list and change the incremation of the fast pointer from 2x per iternation to 1x per iteration.

// With distances from both pointers to the node that starts the cycle being equal and increment being equal, we can see that when the nodes are equal again we are now at the node that starts the cycle.

// Reset the Slow Pointer the Head

//
//            5->6
// S         /    \
// 0->1->2->4      7F
//           \    /
//            9<-8
// Iteration 1

//            5->6
//    S      /    \
// 0->1->2->4      7
//           \    /
//            9<-8F
// Iteration 2

//            5->6
//       S   /    \
// 0->1->2->4      7
//           \    /
//           F9<-8
// Iteration 3 - THE ANSWER

//            5->6
//          S/    \
// 0->1->2->4      7
//          F\    /
//            9<-8

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
// solution from another user
// ==============================================================================
// Time Complexity : O(n)
// Space Complexity : O(1)
var detectCycle = function (head) {
  // Initialize pointers at head of linkedlist...
  var p1 = head,
    p2 = head;
  // Run a loop until p2 and p2.next is equal to null...
  while (p2 != null && p2.next != null) {
    p1 = p1.next; // moving p1 by 1
    p2 = p2.next.next; // moving p2 by 2
    // found the cycle...
    if (p1 == p2) break;
  }
  // In case there is no cycle or no meeting point...
  if (p2 == null || p2.next == null) return null;
  // run loop until again head & p1 don't collab...
  while (head != p1) {
    head = head.next; // moving head by 1...
    p1 = p1.next; // moving p1 by 1 as well...
  }
  return head; // Or return p1, they both will return the tail where cycle starts...
};
