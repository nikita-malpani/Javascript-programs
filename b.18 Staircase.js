function num_ways(n,steps,arr){
  
  for(let i=2;i<=n;i++){
    ways = [];
    
    for(let j=0; j<steps.length;j++){

      let diff = i - steps[j];
      
      
      if (diff >= 0 ){
        for (let k = 0; k < arr[diff].length;k++){
          ways.push([i, ...arr[diff][k]])
        }
      }

    }

    arr[i]=[...ways]
  }
}

let n = 3
stepsAllowd = [1,2,3]
baseCondition = [[[0]], [[1,0]]]
num_ways(n, stepsAllowd, baseCondition)
console.log(baseCondition)
