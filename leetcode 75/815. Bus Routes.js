// You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever.

// For example, if routes[0] = [1, 5, 7], this means that the 0th bus travels in the sequence 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> ... forever.
// You will start at the bus stop source (You are not on any bus initially), and you want to go to the bus stop target. You can travel between bus stops by buses only.

// Return the least number of buses you must take to travel from source to target. Return -1 if it is not possible.

// Example 1:

// Input: routes = [[1,2,7],[3,6,7]], source = 1, target = 6
// Output: 2
// Explanation: The best strategy is take the first bus to the bus stop 7, then take the second bus to the bus stop 6.
// Example 2:

// Input: routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], source = 15, target = 12
// Output: -1

// Constraints:

// 1 <= routes.length <= 500.
// 1 <= routes[i].length <= 105
// All the values of routes[i] are unique.
// sum(routes[i].length) <= 105
// 0 <= routes[i][j] < 106
// 0 <= source, target < 106

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */

// Strategy

// Create adjacency list to keep mapping of stops to routes.
// Traverse graph by level using BFS queue implementation.
// Processing a stop
// If already processed, skip.
// If we've arrived at the target stop, return the count.
// For each route that passes thru the curr stop, queue up all its stops.
// Clear a route's stops to prevent duplicate queueing.
// If target isn't found after traversal, return -1
// Javascript Specific Details

// Using JS's native Array.shift() is an O(n) operation.
// Rolled my own Queue class to achieve an amortized O(1) on shift operations.
var numBusesToDestination = function (routes, source, target) {
  const al = buildAl(routes);

  let queue = new MyQueue();
  queue.push([source, 0]);

  let vis = new Set();

  while (queue.length) {
    let [curr, count] = queue.shift();
    if (vis.has(curr)) continue;
    if (curr === target) return count;

    vis.add(curr);

    al[curr].forEach((idx) => {
      routes[idx].forEach((stop) => {
        queue.push([stop, count + 1]);
      });
      routes[idx] = [];
    });
  }

  return -1;
};

const buildAl = (routes) => {
  let al = {};

  routes.forEach((routes, i) => {
    routes.forEach((stop) => {
      al[stop] ? al[stop].push(i) : (al[stop] = [i]);
    });
  });

  return al;
};

class MyQueue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
    this.length = 0;
  }

  push(el) {
    this.pushStack.push(el);
    this.length++;
  }

  shift() {
    if (!this.popStack.length) {
      if (!this.pushStack.length) return null;
      while (this.pushStack.length) {
        this.popStack.push(this.pushStack.pop());
      }
    }
    this.length--;
    return this.popStack.pop();
  }
}

/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
  if (source === target) return 0;

  const graph = buildGraph(routes, source, target);

  const q = [];
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].includes(source)) {
      q.push([i, 1]);
    }
  }

  const visited = new Set();
  while (q.length) {
    const [busIdx, depth] = q.shift();
    visited.add(busIdx);
    const buses = graph[busIdx];
    for (let i = 0; i < buses.length; i++) {
      const bus = buses[i];
      if (bus === "target") return depth;
      if (visited.has(bus)) continue;
      q.push([bus, depth + 1]);
    }
  }
  return -1;
};

function buildGraph(routes, source, target) {
  const graph = {};

  for (let i = 0; i < routes.length; i++) {
    routes[i].sort((a, b) => a - b);
    graph[i] = [];
  }

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].includes(target)) {
      graph[i].push("target");
    }
    for (let j = i + 1; j < routes.length; j++) {
      if (checkIntersect(routes[i], routes[j])) {
        graph[i].push(j);
        graph[j].push(i);
      }
    }
  }

  return graph;
}

function checkIntersect(a, b) {
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) return true;
    if (a[i] < b[j]) {
      i++;
    } else {
      j++;
    }
  }
  return false;
}
