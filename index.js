//*Adding and Removing Properties:

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const circle = new Circle(10);

circle.location = { x: 1 };
circle["location"] = { x: 1 };
//NOTE: Js object is dynamic, we can add and remove properties after creating an object
//NOTE: we can add properties to object using dot notation or bracket notation, if we want to access  or add  a property dynamically we only use bracket notation.Another use case of bracket notation is when we have a property name with space in it or when we have a property name that starts with a number or when we have a property name that is not a valid identifier

const propertyName = "center-location";
//circle.center-location
circle[propertyName] = { x: 1 };

delete circle.location; //removing a property from an object
