//NOTE: Functions Are Objects:

// Functions are objects in JavaScript, and they have properties and methods just like any other object.

function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log("draw");
  };
}
Circle.call({}, 1); // This expression is exactly the same as on the line 13, when we use new keyword, this new keyword  will internally create an empty object and pass it as the first argument to the call method and this empty object will determine the context for this. So this will reference to this empty object .

Circle.apply({}, [1]); // the difference between call and apply is that in call we pass the arguments separately, but in apply we pass the arguments as an array.
const another = new Circle(1);
