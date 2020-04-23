// 1. Constructor inheritance or Pseudo classical inheritance:

  //A. Creating seprate functionss copy for each indiviual instance:

    function Person(fname, lname){
      this.fname = fname;
      this.lname=lname;
      this.getName=()=> `Hello ${this.fname}  ${this.lname}`
    }

    var newPerson = new Person('nikita', 'malpani')
    console.log(newPerson.getName())

  //B. Creating common functions for each indiviual instance
  
    function Person(fname, lname) {
      this.fname = fname;
      this.lname = lname;
    }
    Person.prototype.getName = function(){ return `Hello ${this.fname}  ${this.lname}`}

    var newPerson = new Person('fname', 'lname')
    console.log(newPerson.getName())

  //C. Inheriting the object:
  
    function NikitaObject(fname, lname, age){
      Person.call(this,fname,lname)
      this.age=age; //It can have its own properties and methods
    }
    NikitaObject.prototype = Object.create(Person.prototype)  // THIS IS WHERE INHERITANCE IS HAPPENING

    var newNikita = new NikitaObject('nikita', 'malpani', 20)
    console.log(newNikita.getName()) //Can access method defined in Person Object


//2. Prototypal inheritance: No new keyword or function calls in this method. 3 ways of passing data to parent object

  //A.  Create init function on Person to set properties
    var Person = {
      init : function (fname, lname) {
        this.fname = fname;
        this.lname = lname;
      },
      getName: function () {
        return `Hello ${this.fname}  ${this.lname}`
      }
    }
    var Nikita = Object.create(Person) // THIS IS WHERE INHERITANCE IS HAPPENING
    Nikita.init('nikita','malpani');
    console.log(Nikita.getName())


  //B. pass paramters while creating object
    var Person = {
      getName: function(){
        return `Hello ${this.fname}  ${this.lname}`
      }
    }
    var Nikita = Object.create(Person, {
      fname:{
        value:'nikita'
      },
      lname:{
        value:'malpani'
      }
    })
    console.log(Nikita.getName())

  //C. By creating a person factory

    function PersonFactory(fname,lname){
      var personObj = Object.create(Person)
      personObj.fname = fname;
      personObj.lname = lname;
      return personObj;
    }

    var Nikita = PersonFactory('Nikita', 'Malpani')
    console.log(Nikita.getName())

//3. Class based inheritance:

  class Person{
    constructor(fname,lname){
      this.fname = fname;
      this.lname=lname
    }

    getName(){
      return  `Hello ${this.fname} ${this.lname}`
    }
  }

  class Nikita extends Person{
    constructor(fname,lname,age){
     super(fname,lname)
     this.age=age;
    }

    getName(){
      return `${super.getName()} my age is ${this.age}`
    }
  }

  var NikitaObj = new Nikita('nikita', 'malpani', 20)
  console.log(NikitaObj.getName())
