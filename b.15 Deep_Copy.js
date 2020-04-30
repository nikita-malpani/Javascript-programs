let nestedObj = {
  name: 'Jhon',
  ids: [{globalId:102}, {deptId: 78}],
  address: {
    city: 'xyz',
    pincode: '123456',
    street: [100, [70, [60, 30]] ],
    phoneNumber: {
      home: 9998887776,
      work: {
        office1: 9922334455,
        office2: 9922334466,
      }
    }
  }
}
//Function to deep Copy array: handles array inside array and object inside array also
let deepCopyArray = (arr) => {
  let arrayCopy = [];
  for (let i of arr) {
    let val = Array.isArray(i) ? [...deepCopyArray(i)] : typeof (i) === 'object' ? {...i} : i
    arrayCopy.push(val)
  }
  console.log(arrayCopy)
  return arrayCopy;
}

//Function to create deep copy of object
let deepCopyObject = (obj) => {
  let objectCopy = {};

  for(let k in obj){
    typeof (obj[k]) !== 'object' ? 
      objectCopy[k] = obj[k] : 
      Array.isArray(obj[k]) ? 
        objectCopy[k] = deepCopyArray(obj[k]) : 
        objectCopy[k] = deepCopyObject({ ...obj[k] })
    
  }

  return objectCopy
}


let newCopy = deepCopyObject(nestedObj)

console.log(nestedObj.name === newCopy.name)
newCopy.name="New Name"
console.log(nestedObj.name === newCopy.name)

console.log(nestedObj.ids)
console.log(newCopy.ids)
newCopy.ids[1].deptId = 103
console.log(nestedObj.ids)
console.log(newCopy.ids)


console.log(nestedObj.address.street)
console.log(newCopy.address.street)
newCopy.address.street[1][1][0] = 600 
console.log(nestedObj.address.street)
console.log(newCopy.address.street)


console.log(nestedObj.address.phoneNumber.work.office1 === newCopy.address.phoneNumber.work.office1)
newCopy.address.phoneNumber.work.office1 = 9999
console.log(nestedObj.address.phoneNumber.work.office1 === newCopy.address.phoneNumber.work.office1)
