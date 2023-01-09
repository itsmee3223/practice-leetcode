// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1
// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 300
// grid[i][j] is '0' or '1'.
/**
 * @param {character[][]} grid
 * @return {number}
 */
// ==============================================================================
var numIslands = function (grid) {
  let numIslands = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] == "1") {
        numIslands++;
        markIslands(row, col, grid);
      }
    }
  }
  return numIslands;
};
// DFS
function markIslands(row, col, grid) {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === "0"
  )
    return;

  grid[row][col] = "0";

  markIslands(row - 1, col, grid); // top
  markIslands(row + 1, col, grid); // down
  markIslands(row, col - 1, grid); // left
  markIslands(row, col + 1, grid); // right
}
