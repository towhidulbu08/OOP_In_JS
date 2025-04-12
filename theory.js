//Four Core Concepts of OOP

//01:Encapsulation:
//O2:Abstraction:
//03:Inheritance:
//04:Polymorphism:

//OOP vs Procedural Programming vs Functional Programming:

//NOTE: Spagehtti code(procedural programming)

// In OOP we group related variables(properties) and functions (methods) that operate on them into objects and this is called encapsulation

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;
// Procedural  Programming:
function getWage(baseSalary, overtime, rate) {
  return baseSalary + overtime * rate;
} //this is procedural programming, we have variable one side and functions on the other side, the're hardly decoupled

// One of The drawbacks(symptoms) of Procedural programming is a function with so many params
//OOP Way:

let employee = {
  baseSalary: 30_000,
  overtime: 10,
  rate: 20,
  getWage: function () {
    return this.baseSalary + this.overtime * this.rate;
  },
};

//? If fewer the number of parameters the easier it is to use and maintain that function

//NOTE: if we write code in Object Oriented way , the functions end up having fewer and fewer pa

//Abstraction: we can hide some of the properties and method from outside and this gives us a couple of benefits first is that we will make the interface of those objects simpler using and understanding an object with a few properties and methods is easier than an object with several properties and method the second benefit is that it help us reduce the impact of change.

//Inheritance: It is a mechanism that allows you to eliminate redundant code

//Polymorphism: Poly=many, morphism=form, It is also a technique that allows you to  get rid of long if and else and switch case statements

//Benefits Of OOP:

//Encapsulation: using encapsulation we group related variable and functions together and this way we can reduce complexity and we can reuse these objects in different parts of programs

//NOTE: reduce complexity + increase reusability

//Abstraction:it hide the details and complexity and show the essentials
//NOTE reduce complexity + isolate impact of changes

//Inheritance: Eliminate redundant code

//Polymorphism: Refactor ugly switch/case statements
