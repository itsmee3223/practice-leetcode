// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix.length || !matrix[0].length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    if (matrix[row][col] === target) return true;
    else if (matrix[row][col] > target) col--;
    else if (matrix[row][col] < target) row++;
  }

  return false;
};

// using binary search
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  /**
   * The goal is to use binary search on sorted row to find the target.
   * Because the rows are sorted in ascending fashion so we can locate
   * the row with the range where the target falls in.
   */
  for (const row of matrix) {
    if (row.length !== 0 && row[0] <= target && row[row.length - 1] >= target) {
      if (binarySearch(row, target)) {
        return true;
      }
    }
  }
  return false;
};

function binarySearch(row, target) {
  if (row.length === 0) {
    return false;
  }
  let mid = Math.floor((row.length - 1) / 2);

  if (row[mid] > target) {
    return binarySearch(row.slice(0, mid), target);
  }
  if (row[mid] < target) {
    return binarySearch(row.slice(mid + 1, row.length), target);
  }
  return true;
}
