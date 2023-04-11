// On a 2D plane, we place n stones at some integer coordinate points. Each coordinate point may have at most one stone.

// A stone can be removed if it shares either the same row or the same column as another stone that has not been removed.

// Given an array stones of length n where stones[i] = [xi, yi] represents the location of the ith stone, return the largest possible number of stones that can be removed.

// Example 1:

// Input: stones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]
// Output: 5
// Explanation: One way to remove 5 stones is as follows:
// 1. Remove stone [2,2] because it shares the same row as [2,1].
// 2. Remove stone [2,1] because it shares the same column as [0,1].
// 3. Remove stone [1,2] because it shares the same row as [1,0].
// 4. Remove stone [1,0] because it shares the same column as [0,0].
// 5. Remove stone [0,1] because it shares the same row as [0,0].
// Stone [0,0] cannot be removed since it does not share a row/column with another stone still on the plane.
// Example 2:

// Input: stones = [[0,0],[0,2],[1,1],[2,0],[2,2]]
// Output: 3
// Explanation: One way to make 3 moves is as follows:
// 1. Remove stone [2,2] because it shares the same row as [2,0].
// 2. Remove stone [2,0] because it shares the same column as [0,0].
// 3. Remove stone [0,2] because it shares the same row as [0,0].
// Stones [0,0] and [1,1] cannot be removed since they do not share a row/column with another stone still on the plane.
// Example 3:

// Input: stones = [[0,0]]
// Output: 0
// Explanation: [0,0] is the only stone on the plane, so you cannot remove it.

// Constraints:

// 1 <= stones.length <= 1000
// 0 <= xi, yi <= 104
// No two stones are at the same coordinate point.

let UnionFind = function (n) {
  //initialise the array
  this.id = new Array(n);
  for (let i = 0; i < n; i++) {
    this.id[i] = i;
  }

  this.numOfComponents = n;
  this.sz = new Array(n).fill(1); //this array keeps the size of all components, root node will have the size of whole component
};

UnionFind.prototype.find = function (n) {
  let root = n;
  while (this.id[root] != root) root = this.id[root];

  //path compression
  let p = n;
  while (p != root) {
    let tmp = this.id[p];
    this.id[p] = root;
    p = tmp;
  }

  return root;
};

UnionFind.prototype.union = function (a, b) {
  let roota = this.find(a);
  let rootb = this.find(b);
  let sz = this.sz;
  let id = this.id;

  if (roota == rootb) return;

  //unify smaller group into larger group
  if (sz[roota] < sz[rootb]) {
    id[roota] = rootb;
    sz[rootb] += sz[roota];
  } else {
    id[rootb] = roota;
    sz[roota] += sz[rootb];
  }
  this.numOfComponents--;
};

/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
  if (stones == null || stones.length == 0) return 0;
  let dsu = new UnionFind(stones.length);
  let px = new Map();
  let py = new Map();
  for (let i = 0; i < stones.length; i++) {
    //a point maps to it's index in dsu
    let x = stones[i][0];
    let y = stones[i][1];
    if (px.has(x)) {
      //unify i with the index of px
      dsu.union(i, px.get(x));
    }
    if (py.has(y)) {
      dsu.union(i, py.get(y));
    }
    px.set(x, i);
    py.set(y, i);
  }
  //now that union is done
  //find out numOfComponents and their size
  let moves = 0;
  for (let i = 0; i < dsu.id.length; i++) {
    if (dsu.id[i] == i) {
      moves += dsu.sz[i] - 1;
    }
  }
  return moves;
};
