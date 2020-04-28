function binarySearch(arr, num){
  let low=0, 
  high = arr.length -1,
  mid = Math.floor((high-low)/2);
  
  while(low<=high){
    if(arr[mid] === num){
        return mid
    }
    else if(arr[mid] > num){
      high = mid -1
      mid = Math.floor((high - low) / 2) 
    }
    else {
      low = mid + 1
      mid = low + Math.floor((high - low) / 2) 
    }
  }
  
  return -1
}
console.log(binarySearch([2,4,5,7,8,12,34], 5))
console.log(binarySearch([1,5,7,8,9], 10 ))
