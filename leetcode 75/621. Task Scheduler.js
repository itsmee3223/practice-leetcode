// Given a characters array tasks, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task is done in one unit of time. For each unit of time, the CPU could complete either one task or just be idle.

// However, there is a non-negative integer n that represents the cooldown period between two same tasks (the same letter in the array), that is that there must be at least n units of time between any two same tasks.

// Return the least number of units of times that the CPU will take to finish all the given tasks.

// Example 1:

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation:
// A -> B -> idle -> A -> B -> idle -> A -> B
// There is at least 2 units of time between any two same tasks.
// Example 2:

// Input: tasks = ["A","A","A","B","B","B"], n = 0
// Output: 6
// Explanation: On this case any permutation of size 6 would work since n = 0.
// ["A","A","A","B","B","B"]
// ["A","B","A","B","A","B"]
// ["B","B","B","A","A","A"]
// ...
// And so on.
// Example 3:

// Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
// Output: 16
// Explanation:
// One possible solution is
// A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A

// Constraints:

// 1 <= task.length <= 104
// tasks[i] is upper-case English letter.
// The integer n is in the range [0, 100].

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const charMap = new Map();
  let maxCharCount = 0;
  let maxChar = tasks[0];

  for (let char of tasks) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
    if (charMap.get(char) > maxCharCount) {
      maxCharCount = charMap.get(char);
      maxChar = char;
    }
  }

  let idleCount = (maxCharCount - 1) * n;

  charMap.forEach((count, char) => {
    if (char === maxChar) return;
    if (count === maxCharCount) idleCount -= count - 1;
    else idleCount -= count;
  });

  return idleCount <= 0 ? tasks.length : tasks.length + idleCount;
};
// solution from another user using regex
// =============================================================================
/**
 * @param {array[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // the map will be our tracking mechanism
  let m = new Map();

  // the max occurrences
  let maxVal = 0;

  // the number of tasks that has the max occurrences
  let maxValCount = 0;

  for (let k of tasks) {
    let tVal = m.has(k) ? m.get(k) + 1 : 1;
    m.set(k, tVal);
    // set our maxVal and number of maxVal tasks only if we have a new max
    if (tVal > maxVal) {
      maxVal = tVal;
      maxValCount = 1;
      // otherwise, increment number of maxVal tasks
    } else if (tVal === maxVal) {
      maxValCount++;
    }
  }
  // our formula, handle the edge case
  return Math.max(tasks.length, (maxVal - 1) * (n + 1) + maxValCount);
};
