function* idGenerator() {
    var index = 0;
    while(true)
        yield index++;
}

function fibonacci(pos){
    let arr=[]
    
    const gen=idGenerator();
    const index = () => gen.next().value
    arr[index()]=0
    arr[index()]=1
    
    let current = index()

    while(current <= pos){
        arr[current] = arr[current - 2] + arr[current -1]
        current = index()
    }
    return arr[pos]
}

console.log(fibonacci(12))


//Alternate way:

function fibonacci(pos){
    let arr=[0,1], len = arr.length
    while(len -1 <= pos){
        arr[len] = arr[len - 2] + arr[len -1]
        len = arr.length
    }
    return arr[pos]
}

console.log(fibonacci(10))

