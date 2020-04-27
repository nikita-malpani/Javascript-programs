const company = {
    marketing: [{
      name: 'Marie',
      salary: 1000
    }, {
      name: 'Nora',
      salary: 1600
    }],
  
    development: {
      Java: [{
        name: 'Kim',
        salary: 2000
      }, {
        name: 'Raavi',
        salary: 1800
      }],
      UX: [{
        name: 'Jack',
        salary: 1300
      }],
    }
  }
  
let sum=0;
  let getArray = (arr)=> {
      for(let dept in arr){
          if(Array.isArray(arr[dept])){
              arr[dept].forEach(element => {
                sum+=element.salary
              });
          }else{
              getArray(arr[dept])
          }
      }
  }

  getArray(company)
  console.log(sum)
