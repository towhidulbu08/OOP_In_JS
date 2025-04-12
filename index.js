//topics related to Objects:

//creating objects
//factories and constructors
//primitives and reference types
// working with properties
//private properties
//getters/setters

// Creating objects with Objects literals:

const circle1 = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

//NOTE:Object literals  syntax is not a good way to create objects because it is not reusable and it is not flexible

//behavior: if an object has one or more methods, we say it has behavior
//NOTE: behavior is the ability to do something, to perform an action, to act

//? Creating an object with object literal syntax is an issue only if that object has behavior,so the solution is to use factory functions or constructor functions

// Factory Function:
// function createCircle(radius) {
//   return {
//     radius,

//     draw: function () {
//       //console.log("draw");
//     },
//   };
// }
// const circle = createCircle(1);
// circle.draw(); //draw

//Constructor Functions:

// function Circle(radius) {
//   this.radius = radius;

//   this.draw = function () {
//     //console.log("draw");
//   };

//   //console.log("this", this);
//   //here this is a reference to the object that is being created by the constructor function
// }

// const result = new Circle(1);
// console.log(result.constructor);
// console.log(circle.constructor);

//NOTE: the new keyword does 4 things:
// 1. creates a new empty object like {}

// 2. binds the this keyword to the new object
// 3. returns the new object

// when create object with literal syntax, internally js engine uses object constructor function to create the object

let x = {};

//let x=new Object()

//?Builrt-in Constructors functions:
//01.new String(); '',"",``,String()
//02.new Number(); 1,2,3,...
//03.new Boolean(); tree,false
//04.new Object()
//05.new Function()
//06.new Array()
//07.new Date()
//08.new RegExp()
//09.new Error()
//10.new Map()
//11.new Set()
//12.new WeakMap()
//13.new WeakSet()

//NOTE: Every object in JavaScript has a constructor property that references the function that was used to create that object.

//NOTE: Functions Are Objects:

// Functions are objects in JavaScript, and they have properties and methods just like any other object.

function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log("draw");
  };
}
const Circle1 = new Function(
  "radius",
  `this.radius=radius;this.draw=function(){console.log("draw");}`
);
const circle = new Circle1(1);
const another = new Circle(1);
