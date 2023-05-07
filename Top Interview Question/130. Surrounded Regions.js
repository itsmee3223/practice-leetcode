// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

// Example 1:

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.
// Example 2:

// Input: board = [["X"]]
// Output: [["X"]]

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length == 0) return null;

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (
        board[i][j] == "O" &&
        (i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1)
      ) {
        dfs(board, i, j);
      }
    }
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] == "W") {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }

  return board;
};

function dfs(board, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    board[i][j] == "X" ||
    board[i][j] == "W"
  ) {
    return;
  }
  board[i][j] = "W";
  dfs(board, i + 1, j);
  dfs(board, i - 1, j);
  dfs(board, i, j + 1);
  dfs(board, i, j - 1);
  return;
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

const solve = (board) => {
  const m = board.length,
    n = board[0].length;

  if (m < 3 || n < 3) return board;

  const dfs = (i, j) => {
    if (!board[i] || board[i][j] !== "O") return;
    board[i][j] = 0;
    dfs(i - 1, j), dfs(i + 1, j), dfs(i, j - 1), dfs(i, j + 1);
  };

  for (let i = 0; i < m; i++) dfs(i, 0), dfs(i, n - 1);
  for (let j = 0; j < n; j++) dfs(0, j), dfs(m - 1, j);

  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) board[i][j] = !board[i][j] ? "O" : "X";

  return board;
};
