// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:

// Input: m = 3, n = 7
// Output: 28
// Example 2:

// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Constraints:

// 1 <= m, n <= 100
// ================================================================================
var uniquePaths = function (m, n) {
  let row = Array(n).fill(1);
  let newRow = Array(n).fill(1);
  for (i = 0; i < m - 1; i++) {
    for (j = n - 2; j >= 0; j--) {
      newRow[j] = newRow[j + 1] + row[j];
    }
    row = newRow;
  }
  return row[0];
};
// solution from another user
// ==============================================================================
var uniquePaths = function (m, n) {
  let perRow = Array(n).fill(1);

  // pathCount is 2D array of size m * n
  let pathCount = Array.from(Array(m).fill(perRow));

  for (let y = 1; y < m; y++) {
    for (let x = 1; x < n; x++) {
      // path count = number of path reach to one step left + number of path reach to one step up
      pathCount[y][x] = pathCount[y][x - 1] + pathCount[y - 1][x];
    }
  }

  return pathCount[m - 1][n - 1];
};