let user = ["shital", 22, "bihar"];
let [name, age, city] = user;
console.log(name);
console.log(age);
console.log(city);
//  another example

let user1 = ["shital", 22, "bihar", ["Male", 25000]];
let [name1, age1, city1, [gender, salary]] = user1;

console.log(name);
console.log(age);
console.log(city);
console.log(gender);
console.log(salary);

// example with function

function user2([name2, age2 = 20, city2]) {
  console.log(name2);
  console.log(age2);
  console.log(city2);
}
user2(["shital", 22, "bihar"]);

// anoter example
function user3() {
  return ["soni", 20, "bihar"];
}

let [name3, age3, city3] = user3();
console.log(name3);
