// A Symbol is a special type of value that is always unique, even if it has the same name!
let secretKey1 = Symbol("password");
let secretKey2 = Symbol("password");

console.log(secretKey1 === secretKey2); // ❌ false (Even though they look the same!)

let locker = {};

let secretKey = Symbol("lockerKey");

locker[secretKey] = "Super Secret Stuff!";

console.log(locker[secretKey]); // 🏆 "Super Secret Stuff!"
