function generateEvenRandom(){

    let range = 1000, even = false, num;

    do{
      num = Math.floor(Math.random() * range)
      even = num % 2 === 0
    }while(!even)
    console.log(num)
    return num
}

setInterval(() => {
  generateEvenRandom()
}, 1000);
