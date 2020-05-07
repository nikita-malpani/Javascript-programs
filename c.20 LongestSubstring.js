let a = 'Happy New Year', b = 'Happy Birthday';

function highestSubstring(a, b) {
  let s1, s2,total = 0;
  a.length > b.length ? (s1 = a, s2 = b) : (s1 = b, s2 = a);

  for (let i = 0; i < s2.length; i++) {
    let low = i, high = s2.length ;

    while (low < high) {
      let substr = s2.substring(low, high)
      if(s1.includes(substr)) {
        total = substr.length > total ? substr.length : total
      }
      high -- ;
    }
  }
  return total
}

console.log(highestSubstring(b, a));
