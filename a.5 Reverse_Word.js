var test = "this is my name"
var temp=test.split(" ")
console.log(temp)
var reverse='';
for(a of temp){
    console.log(a)
    var t = a.split("").reverse();
    t[0]=t[0].toUpperCase();
    reverse+=t.join("")+" ";
}
console.log(reverse) //Siht Si Ym Eman
