// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Example 1:

// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.
// Example 2:

// Input: mat = [[1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1],
//               [1,1,1,1]]
// Output: 8
// Example 3:

// Input: mat = [[5]]
// Output: 5
// ==============================================================================
var diagonalSum = function (mat) {
  var sum = 0;
  var row = mat.length;
  var mid = Math.floor(row / 2);

  for (let i = 0; i < row; i++) {
    sum += mat[i][i] + mat[n - i - i][i];
  }
  if (row % 2 === 1) {
    sum -= mat[mid][mid];
  }

  return sum;
};

// ==============================================================================
var diagonalSum = (mat) => {
  var sum = 0;
  var col = mat[0].length - 1;

  mat.forEach((row, index) => {
    if (index !== col - index) {
      sum += row[col - index];
    }
    sum += row[index];
  });

  return sum;
};
