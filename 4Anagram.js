function checkAnagram( first, second ){
    return first.toLowerCase().split('').sort().join('') === second.toLowerCase().split('').sort().join('')
}

console.log(checkAnagram('hello', 'hola'))
console.log(checkAnagram('friend', 'finder'))
console.log(checkAnagram('LISTEN', 'silent'))
console.log(checkAnagram('School master' , 'The classroom'))
