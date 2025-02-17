// Generators are special functions that pause and resume.
// We use function* and yield to create them.
// We call .next() to move step by step.

function* Generators() {
  console.log("first Message ");
  yield "Yield no 1";
  console.log("second message");
  yield "Yield no 2";
}
let g = Generators();
console.log(g.next());
console.log(g.next());
console.log(g.next());
