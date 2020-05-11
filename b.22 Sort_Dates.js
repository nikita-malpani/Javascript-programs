
function compareDates(date) {

  let today = new Date();
  let current_year = today.getFullYear(), new_year = date.getFullYear();
  if (current_year === new_year) {
    let current_month = today.getMonth(), new_month = date.getMonth();
    if (current_month === new_month) {
      let current_date = today.getDate(), new_date = date.getDate(), diff = current_date - new_date;
      if (diff == 0 || diff == 1)
        return 'Recent'
      else
        return 'This Month'
    } else {
      let month_mapping = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return month_mapping[new_month];
    }
  } else {
    return new_year
  }
}


let arr = [
  {
    "transactionDate": "10 May 2020",
    "amout": 20
  },
  {
    "transactionDate": "11 May 2020",
    "amout": 70
  },
  {
    "transactionDate": "05 May 2020",
    "amout": 100
  },
  {
    "transactionDate": "10 May 2020",
    "amout": 50
  },
  {
    "transactionDate": "26 March 2020",
    "amout": 250
  },
  {
    "transactionDate": "01 May 2020",
    "amout": 100
  },
  {
    "transactionDate": "01 May 2017",
    "amout": 450
  },
  {
    "transactionDate": "20 Feb 2020",
    "amout": 900
  },
  {
    "transactionDate": "20 Feb 2019",
    "amout": 500
  }
]

let sortedArr = {}

for (let a of arr) {
  let key = compareDates(new Date(a.transactionDate))
  !Array.isArray(sortedArr[key]) ? sortedArr[key] = [a] : sortedArr[key].push(a)
}

console.log(sortedArr)
