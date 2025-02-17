function sum(name, ...args) {
  console.log(arguments);
  document.write(`hello ${name} :`);
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  document.write(sum);
}
var arr = [20, 30, 40];
sum("welcome", ...arr);

// var obj1 = {
//   age: 25,
// };
// var obj2 = {
//   name: "shital",
// };

// var obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
