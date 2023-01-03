// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// example
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
// ==============================================================================
var mergeTwoLists = function (list1, list2) {
  // initialize a dummy head node
  var mergedHead = { val: -1, next: null };
  // initialize a crtNode variable to keep track of the current node, starting with the dummy head node
  var crt = mergedHead;
  // while there are still nodes to compare in two lists
  while (list1 && list2) {
    // if value of 2nd node is less than value of 1st node
    if (list1.val > list2.val) {
      // set the current node's link to list2 node
      crt.next = list2;
      // set the list2 node to list2's next node
      list2 = list2.next;
    }
    // else
    else {
      // set the current node's link to list1 node
      crt.next = list1;
      // set the list1 node to list1's next node
      list1 = list1.next;
    }
    // move on to the next node
    crt = crt.next;
  }
  // if one of the lists no longer have any nodes to compare, point crt's link to the remaining nodes in the other list
  // if both lists are empty, point crt's link to null
  crt.next = list1 || list2;
  // return merged linked list
  return mergedHead.next;
};

// ==============================================================================
// simplified using recursion
var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2; // if one of list is null return list does'nt null
  if (l1.val < l2.val) { // check if l1 val < l2 val
    l1.next = mergeTwoLists(l1.next, l2); // if true l1.next = mergeTwoLists(l1.next, l2) then return l1
    return l1;
  }
  l2.next = mergeTwoLists(l1, l2.next); // if not l2.next = mergeTwoLists(l1, l2.next) then return l2
  return l2;
};