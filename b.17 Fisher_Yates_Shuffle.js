function generateRandomNumber(range){
  // Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  return Math.floor(Math.random() * (range + 1))
}

function FisherYatesShuffle(arr){
  let pointer= arr.length -1;
  while(pointer > -1 ){
    let newPos = generateRandomNumber(pointer), temp = arr[pointer];
    
    arr[pointer] = arr[newPos];
    arr[newPos] = temp;
    
    --pointer;
  }
  
  return arr
}

console.log(FisherYatesShuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']))
console.log(FisherYatesShuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']))
console.log(FisherYatesShuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']))
console.log(FisherYatesShuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']))
