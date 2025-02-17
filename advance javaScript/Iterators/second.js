let numbers = [100, 200, 300, 400, 500];
let iter = numbers[Symbol.iterator]();
let result = iter.next();
while (!result.done) {
  console.log(result.value);
  result = iter.next();
}
