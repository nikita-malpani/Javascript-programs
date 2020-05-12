
function mergeSort(arr) {
  if ( arr.length === 1)
    return arr

  const middle = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle, arr.length)))
}


function merge(l,r) {
  let result = [];

  while(l.length && r.length){
    l[0] < r[0] ? result.push(l.shift()) : result.push(r.shift())
  }
  while(l.length){
    result.push(l.shift())
  }
  while(r.length){
    result.push(r.shift())
  }
  return result;
  
}
console.log(mergeSort([42, 100, 2, 5, 25, 20]))
