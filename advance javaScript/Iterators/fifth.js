//  yaha par apna iterators banate hai

function numberIterator(arr) {
  var nextNum = 0;
  return {
    next() {
      if (nextNum < arr.length) {
        return {
          value: arr[nextNum++],
          done: false,
        };
      } else {
        return { done: true }; // ✅ Fix: return should be on the same line as '{'
      }
    },
  };
}

let numbers = [100, 200, 300, 400, 500];
let num = numberIterator(numbers);

console.log(num.next()); // { value: 100, done: false }
console.log(num.next()); // { value: 200, done: false }
console.log(num.next()); // { value: 300, done: false }
console.log(num.next()); // { value: 400, done: false }
console.log(num.next()); // { value: 500, done: false }
console.log(num.next()); // { done: true }
