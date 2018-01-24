let MINEFIELD = [
  [null, null, null, null, '*'],
  [null, null, null, null, '*'],
  ['*', null, null, null, null],
  [null, null, null, '*', null],
  [null, '*', null, null, null]
];

// bounds-checking helper function
// returns an "empty" value if the coordinate doesn't exist.
function getCell(grid, row, col) {
  let empty = null;
  if (row < 0 || col < 0) {
    return empty;
  } else if (row >= grid.length) {
    return empty;
  } else if (col >= grid[row].length) {
    return empty;
  } else {
    return grid[row][col];
  }
}

// this function accepts a 2D array representing
// a minesweeper minefield. It returns a new 2D
// array where each cell has a number representing
// how many mines that cell touches, 
// let MINEFIELD = [
//   [null, null, null, null, '*']
//   [null, null, null, null, '*']
//   ['*', null, null, null, null]
//   [null, null, null, '*', null]
//   [null, '*', null, null, null]
// ]
// [
//  [0, 0, 0, 2, 9]
//  [1, 1, 0, 2, 9]
//  [9, 1, 1, 2, 2]
//  [2, 2, 2, 9, 1]
//  [1, 9, 2, 1, 1]
// ]
function markMines(field) {
  for (let row = 0; row < field.length; row++) {
    for (let col = 0; col < field[row].length; col++) {
      field[row][col] = countMines(field, row, col);
    }
  }
  
  return field;
}

function countMines(field, row, col) {
  // we must check for both '*' and 9 since we're modifying
  // the original array.
  if (field[row][col] === '*' || field[row][col] === 9) {
    return 9;
  }
  let result = 0;
  
  if (getCell(field, row - 1, col) === '*') { // north
    result++;
  }
  if (getCell(field, row + 1, col) === '*') { // south
    result++;
  }
  if (getCell(field, row, col + 1) === '*') { // east
    result++;
  }
  if (getCell(field, row, col - 1) === '*') { // west
    result++;
  }
  
  if (getCell(field, row - 1, col - 1) === '*') { // nw
    result++;
  }
  if (getCell(field, row - 1, col + 1) === '*') { // ne
    result++;
  }
  if (getCell(field, row + 1, col - 1) === '*') { // sw
    result++;
  }
  if (getCell(field, row + 1, col + 1) === '*') { // se
    result++;
  }
  
  return result;
}

console.log('Minefield:');
console.log(MINEFIELD);
console.log();

let result = markMines(MINEFIELD);

console.log('Result:');
console.log(result);
console.log();

simpleAssert(result[0][0], 0);
simpleAssert(result[1][0], 1);
simpleAssert(result[1][1], 1);
simpleAssert(result[3][0], 2);
simpleAssert(result[4][4], 1);

function simpleAssert(actual, expected) {
  if (expected !== actual) {
    console.log("expected:", expected, "actual:", actual);
  }
}
