function breakAndMake(arr,len){
  return [arr.splice(0, len), arr.splice(0, arr.length) ]  
}

console.log( breakAndMake([0, 1, 2, 3, 4, 5], 3))
// output: [[0, 1, 2], [3, 4, 5]]

console.log(breakAndMake([0, 1, 2, 3, 4, 5, 6], 4))
// output: [[0, 1, 2, 3], [4, 5, 6]]

console.log(breakAndMake([0, 1, 2, 3], 2))
// output: [[0, 1], [2, 3]]

console.log(breakAndMake([0, 1, 2, 3], 3))
// output: [[0, 1, 2], [3]]
