let suduko = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

function isBoxValid(arr) {
  return new Set(arr).size === arr.length
}

function isSudukoValid(arr) {
  let subBoxes = [], column = [];

  for (let i = 0; i < arr.length; i++) {
    //Check each row
    if (!isBoxValid(arr[i].filter(e => e !== '.'))) {
      return false
    }
    arr[i].forEach(() => column.push([]))

    if (i % 3 == 0) {
      subBoxes.unshift([], [], [])
    }
    //Create box array
    for (let j = 0, k = 0; j < arr[i].length; j = j + 3, k++) {
      subBoxes[k].push(...arr[i].slice(j, j + 3).filter(e => e !== '.'))
    }

    //Create column array
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== '.') {
        column[j].push(arr[i][j])
      }
    }

  }
  //Check each 3x3 box
  for (let i of subBoxes) {
    if (!isBoxValid(i)) {
      return false
    }
  }

  //Check for each column
  for (let i of column) {
    if (!isBoxValid(i)) {
      return false
    }
  }

  return true
}
console.log(isSudukoValid(suduko))
