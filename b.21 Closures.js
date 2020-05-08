function SavingAccount(){
  var amount = 0;
 
  return {
    deposite : function(a){
      amount += a;
      console.log(`Deposite of ${a}. Current Balance: ${amount}`)
    },
    withhdrawal : function(a){
      amount -= a;
      console.log(`Withdraw of ${a}. Current Balance: ${amount}`)
    },
    balance: function(){
      return amount
    }
  }
}
let a1=SavingAccount()
console.log(a1.deposite(100))
console.log(a1.balance())
console.log(a1.withhdrawal(10))
console.log(a1.balance())
console.log(a1.withhdrawal(10))
console.log(a1.balance())

let a2=SavingAccount();
console.log(a2.balance())
console.log(a2.deposite(1000))
console.log(a2.balance())
console.log(a2.withhdrawal(200))
console.log(a2.balance())
console.log(a2.withhdrawal(100))
console.log(a2.balance())

console.log(a1.balance())
console.log(a2.balance())
