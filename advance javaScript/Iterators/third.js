let numbers = "shital kumari";
let iter = numbers[Symbol.iterator]();
let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}
