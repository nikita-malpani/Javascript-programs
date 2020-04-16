function getMultiples(num, arr) {
    return arr.filter(function(value) {
        if (value !== num) {
            return (value % num == 0);
        }
    })
}

var allNums = [...[...Array(99).keys()].map((i) => i + 2)]
var multipleList = [];

for (let i of allNums) {
    multipleList.push(...getMultiples(i, allNums))
}
var notPrime = new Set(multipleList)
notPrime = [...notPrime]

let difference = allNums.filter(x => !notPrime.includes(x));
console.log(difference)
