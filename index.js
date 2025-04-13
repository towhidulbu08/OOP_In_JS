//*Abstraction:

function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function () {
    //...
  };
  this.draw = function () {
    computeOptimumLocation();
    //defaultLocation();
    //this.radius
  };
}

const circle = new Circle(10);
circle.draw();
//NOTE: Abstraction means we should hide the details and complexity and show or expose only the essentials
