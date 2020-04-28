function doMultipication(a, b, c) {
  return a * b * c;
}

function partialFunction(multiply) {

  return function innerPartial(...a) {
  
    return a.length >= multiply.length ? 
    multiply.apply(this, a) 
    : function (...b) { 
        return innerPartial.apply(this, a.concat(b));
      }

  };
}

const multiply = partialFunction(doMultipication)

console.log(multiply(2, 3, 4))
console.log(multiply(2)(3, 4))
console.log(multiply(2, 3)(4))
console.log(multiply(2)(3)(4))
