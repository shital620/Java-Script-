// Functions as Arguments
// You can pass functions as arguments to other functions. These are called callback functions.

function callFunction(callback) {
  callback();
}

function sayHi() {
  console.log("Hi, Shital!");
}

callFunction(sayHi); // Output: Hi, Shital!
