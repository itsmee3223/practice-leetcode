// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

// Example 1:

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: [0,1]
// Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].
// Example 2:

// Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
// Output: [0,2,1,3]
// Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
// So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].
// Example 3:

// Input: numCourses = 1, prerequisites = []
// Output: [0]

// Constraints:

// 1 <= numCourses <= 2000
// 0 <= prerequisites.length <= numCourses * (numCourses - 1)
// prerequisites[i].length == 2
// 0 <= ai, bi < numCourses
// ai != bi
// All the pairs [ai, bi] are distinct

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const inDegree = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    inDegree[v]++;
  }

  const queue = [];
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const res = [];
  while (queue) {
    const u0 = queue.shift();
    numCourses--;
    res.push(u0);
    for (const [v, u] of prerequisites) {
      if (u === u0) inDegree[v]--;
      if (u === u0 && inDegree[v] === 0) queue.push(v);
    }
  }

  return numCourses === 0 ? res : [];
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// DFS
var findOrder = function (numCourses, prerequisites) {
  let adjList = new Array(numCourses).fill(0).map(() => []);
  let visited = new Array(numCourses).fill(false);
  let inDegree = new Array(numCourses).fill(0);
  for (let [course, preCourse] of prerequisites) {
    adjList[preCourse].push(course);
    inDegree[course]++;
  }
  // We can take courses that have no prerequisite or whose pre-requisites have already been taken
  let res = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] == 0 && !visited[i]) {
      dfs(i);
    }
  }

  return res.length === numCourses ? res : [];

  function dfs(node) {
    res.push(node);
    visited[node] = true;
    for (let next of adjList[node]) {
      inDegree[next]--;
      if (inDegree[next] == 0 && !visited[next]) {
        dfs(next);
      }
    }
  }
  // Time Complexity: O(V + E), if there is a valid answer, we visit every node and all of its neighbours (those that current node is pointing to)
  // Space Complexity: O(V + E), for adjacency list
};
