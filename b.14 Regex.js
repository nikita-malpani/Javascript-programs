function countVowels(str){
  return str.toLowerCase().match(/a|e|i|o|u/g).length
}

console.log(countVowels('GlobAnt')). //2
console.log(countVowels('javascript')) //3
