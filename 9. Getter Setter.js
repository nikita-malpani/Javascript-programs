class Person{
  get GetFname(){
    return this.fname
  }

  get GetLname() {
    return this.lname
  }

  set SetFname(f){
    this.fname = f
  }

  set SetLname(l) {
    this.lname = l
  }

  getName(){
    return `Hello ${this.GetFname} ${this.GetLname}`
  }
}

var obj = new Person()
obj.SetFname = 'nikita'
obj.SetLname = 'malpani'
console.log(obj.getName())
