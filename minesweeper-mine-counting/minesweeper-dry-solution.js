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
  // if the cell is a bomb, replace it with a 9.
  // we have to check for both '*' and 9 because it changes.
  let cellValue = getCell(field, row, col);
  if (cellValue === '*' || cellValue === 9) {
    return 9;
  }

  let totalNearbyMines = 0;

  // create an array representing every combination of row and column
  // offsets of all the different directiosn to look in.
  let rowColOffsets = [
    [-1, 0], [1, 0], [0, 1], [0, -1], // north, south, east, and west
    [-1, -1], [-1, 1], [1, 1], [1, -1]  // nw, ne, se, sw
  ];

  // iterate through each offset representing looking in each direction.
  for (let i = 0; i < rowColOffsets.length; i++) {
    let rowOffset = rowColOffsets[i][0];
    let colOffset = rowColOffsets[i][1];

    let rowIndex = row + rowOffset;
    let colIndex = col + colOffset;

    let neighborValue = getCell(field, rowIndex, colIndex);

    if (neighborValue === '*' || neighborValue === 9) {
      totalNearbyMines++;
    }
  }
  return totalNearbyMines;
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
