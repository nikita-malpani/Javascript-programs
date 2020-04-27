let multiply = a => b => b !== undefined ?  multiply(a*b) : a;
   
console.log(multiply(2)())
console.log(multiply(2)(3)())
console.log(multiply(2)(3)(4)())
console.log(multiply(2)(3)(4)(5)())
