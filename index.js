//*Enumerating or iterating Properties of an Object
//NOTE: Enumerating means to go through each property of an object one by one using for in loop

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

for (let key in circle) {
  if (typeof circle[key] !== "function") {
    console.log(key, circle[key]);
  }
}

const keys = Object.keys(circle);
console.log(keys); //['radius', 'draw']

//NOTE: with Object.keys() methods we cannot separate the properties from methods, we can only get the properties of an object

//NOTE: with for in loop we can separate the properties and methods of an object

//NOTE: in operator is used to check if a property exists in an object or not
//NOTE: in operator returns true if the property exists in the object or its prototype chain
if ("radius" in circle) {
  console.log("Circle has a radius property");
}

console.log("radius" in circle); //true
