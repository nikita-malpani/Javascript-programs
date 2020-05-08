function SavingAccount() {
  var amount = 0;

  return {
    deposite: function (amt) {
      if (isNaN(amt)) {
        return `Please enter valid number`
      }
      amount += amt;
      console.log(`Deposite of ${amt}. Current Balance: ${amount}`)
    },
    withdrawal: function (amt) {
      if (amt > amount || isNaN(amt)) {
        return `Please enter valid number or Amount insufficient`
      }
      amount -= amt;
      console.log(`Withdraw of ${amt}. Current Balance: ${amount}`)
    },
    balance: function () {
      return amount
    }
  }
}
let a1 = SavingAccount()
console.log(a1.deposite(undefined))
console.log(a1.withdrawal(100))

console.log(a1.deposite(100))
console.log(a1.balance())
console.log(a1.withdrawal(10))
console.log(a1.balance())
console.log(a1.withdrawal(10))
console.log(a1.balance())

let a2 = SavingAccount();
console.log(a2.balance())
console.log(a2.deposite(1000))
console.log(a2.balance())
console.log(a2.withdrawal(200))
console.log(a2.balance())
console.log(a2.withdrawal(100))
console.log(a2.balance())

console.log(a1.balance())
console.log(a2.balance())
