//*Value vs Reference Types:

// Value types are stored in the stack and are copied when assigned to a new variable.
// Reference types are stored in the heap and are referenced when assigned to a new variable.

// Value types include: undefined, null, boolean, number, string, bigint, symbol
// Reference types include: object, array, function, date, regex, etc.
// Value types are immutable, meaning they cannot be changed once created.
// Reference types are mutable, meaning they can be changed after creation.

let x = 10; // Value type
let y = x; // y is a copy of x

x = 20; // x is changed to 20

let a = { value: 10 }; // Reference type
let b = a; // b is a reference to a

a.value = 20; // a is changed to 20

//NOTE: object is not stored in variable a or b, but stored somewhere else in memory called heap and the address of that memory is stored inside a and b. both a and b are pointing to the same object in memory. So when we change the value of a, it also changes the value of b because they are both pointing to the same object in memory.

//*Conclusion: Primitive are copied by value and objects are copied by reference(memory reference).

//let number = 10;

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
  //console.log(number); // 11
}

//increase(number);
// when we call increase function and pass this number variable its value is copied into function parameter number and  function parameter are local variables. So parameter number are completely independent of this number variable.  they both are different variables. So when we increase the value of number inside the function it does not affect the value of number outside the function. So when we log the value of number outside the function it will still be 10.

//console.log(number);

increase(obj);
console.log(obj);
