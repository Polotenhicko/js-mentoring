// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
const log = console.log;
function chunkArrayInGroups(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  };
  return result;
}
// log(chunkArrayInGroups(["a", "b", "c", "d"], 2) ) // should return [["a", "b"], ["c", "d"]].
// log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))// should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
// log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3))// should return [[0, 1, 2], [3, 4, 5], [6]].



// ! решить рекурсией: 

// Compute Pascal's triangle up to a given number of rows.
// In Pascal's Triangle each number is computed by adding the numbers to the right and left of the current position in the previous row.
const rows = (size) => {
  if (size === 0) {
    return [];
  } else if (size === 1) {
    return [[1]];
  };
  let arr = [[1]];
    while (size-- > 1) {
      arr.push(getNextRow(arr[arr.length - 1]));
      log('arr after push next row:', arr);
    };
  const getNextRow = (row) => {
    nextRow = [];
    nextRow.push(1);
    for (let i = 0; i < row.length - 1; i++) {
      nextRow.push(row[i] + row[i + 1]);
    };
    nextRow.push(1);
    return nextRow;
  }
  return arr;
};

log(rows(0)) // []
log(rows(1)) // [[1]]
log(rows(2)) // [[1], [1,1]]
log(rows(5)) // [ [1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], ]
log(rows(10)) // [ [1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1], [1, 9, 36, 84, 126, 126, 84, 36, 9, 1], ]