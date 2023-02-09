// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [
// [2,1,1],
// [1,1,0],
// [0,1,1]
// ]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const row = grid.length,
    col = grid[0].length - 1,
    direction = [
      [0, 1], // right
      [1, 0], // up
      [0, -1], // left
      [-1, 0], // bottom
    ];

  let queue = [],
    oranges = 0,
    time = 0;

  for (let r = 0; r < row; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) oranges++;
      else if (grid[r][c] === 2) queue.push([r, c, 0]);
    }
  }

  while (queue.length && oranges) {
    const [currR, currC, mins] = queue.shift();

    if (grid[currR][currC] === 1) {
      grid[currR][currC] = 2;
      oranges--;
      time = mins;
    }

    for (let [addR, addC] of direction) {
      const [newR, newC] = [currR + addR, currC + addC];
      if (newR < 0 || newR > row - 1 || newC < 0 || newC > col) continue;
      if (grid[newR][newC] === 1) {
        queue.push([newR, newC, mins + 1]);
      }
    }
  }

  return oranges > 0 ? -1 : time;
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let freshOranges = 0;
  let minutes = 0;

  const queue = [];

  for (let row = 0; row < grid.length; ++row) {
    for (let column = 0; column < grid[0].length; ++column) {
      if (grid[row][column] === 1) {
        ++freshOranges;
      }

      if (grid[row][column] === 2) {
        queue.push([row, column]);
      }
    }
  }

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (freshOranges > 0 && queue.length) {
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; ++i) {
      const [row, column] = queue.shift();

      for (const [directionRow, directionColumn] of directions) {
        const [queueRow, queueColumn] = [
          row + directionRow,
          column + directionColumn,
        ];

        if (
          queueRow < 0 ||
          queueColumn < 0 ||
          queueRow >= grid.length ||
          queueColumn >= grid[0].length ||
          grid[queueRow][queueColumn] !== 1
        ) {
          continue;
        }

        grid[queueRow][queueColumn] = 2;

        queue.push([queueRow, queueColumn]);

        --freshOranges;
      }
    }

    ++minutes;
  }

  return !freshOranges ? minutes : -1;
};
