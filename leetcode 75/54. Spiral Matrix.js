// Given an m x n matrix, return all elements of the matrix in spiral order.

// Example 1:

// Input: matrix = [
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 10
// -100 <= matrix[i][j] <= 100

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let r = matrix.length,
    c = matrix[0].length;
  let [left, right, top, bottom] = [0, c - 1, 0, r - 1];

  let arr = [];

  while (left <= right && top <= bottom) {
    // left to right
    for (let i = left; i <= right; i++) arr.push(matrix[top][i]);
    top++;

    // top to bottom
    for (let i = top; i <= bottom; i++) arr.push(matrix[i][right]);
    right--;

    // left to right
    if (top <= bottom) {
      for (let i = right; i >= left; i--) arr.push(matrix[bottom][i]);
      bottom--;
    }

    // bottom to top
    if (left <= right) {
      for (let i = bottom; i >= top; i--) arr.push(matrix[i][left]);
      left++;
    }
  }

  return arr;
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let arr = [];
  let r = matrix.length;
  let c = matrix[0].length;
  let direction = 0;
  let left = 0;
  let right = c - 1;
  let bottom = 0;
  let top = r - 1;

  while (arr.length < r * c) {
    if (direction == 0) {
      for (let i = left; i <= right; i++) {
        arr.push(matrix[bottom][i]);
      }
      bottom++;
      direction++;
    } else if (direction == 1) {
      for (let i = bottom; i <= top; i++) {
        arr.push(matrix[i][right]);
      }
      right--;
      direction++;
    } else if (direction == 2) {
      for (let i = right; i >= left; i--) {
        arr.push(matrix[top][i]);
      }
      top--;
      direction++;
    } else if (direction == 3) {
      for (let i = top; i >= bottom; i--) {
        arr.push(matrix[i][left]);
      }
      left++;
      direction++;
    }
    if (direction == 4) direction = 0;
  }
  return arr;
};
