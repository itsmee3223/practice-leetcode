// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]
// Example 2:

// Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
// Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

// Constraints:

// n == matrix.length == matrix[i].length
// 1 <= n <= 20
// -1000 <= matrix[i][j] <= 1000

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  var n = matrix.length;
  var depth = ~~(n / 2);

  for (let i = 0; i < depth; i++) {
    var len = n - 2 * i - 1;
    var opp = n - 1 - i;
    for (let j = 0; j < len; j++) {
      var temp = matrix[i][i + j];
      matrix[i][i + j] = matrix[opp - j][i];
      matrix[opp - j][i] = matrix[opp][opp - j];
      matrix[opp][opp - j] = matrix[i + j][opp];
      matrix[i + j][opp] = temp;
    }
  }
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const n = matrix.length - 1;

  let a = 0;

  while (a <= n / 2) {
    let b = a;
    while (b < n - a) {
      const p1 = matrix[a][b];
      const p2 = matrix[b][n - a];
      const p3 = matrix[n - a][n - b];
      const p4 = matrix[n - b][a];

      matrix[b][n - a] = p1;
      matrix[n - a][n - b] = p2;
      matrix[n - b][a] = p3;
      matrix[a][b] = p4;

      b++;
    }
    a++;
  }

  return matrix;
};
