function* Generators() {
  yield "php";
  yield "node";
  yield "Angular";
  yield "react";
}
// let g = Generators();
// console.log(g.next().value);
// console.log([...g]);

let g = Generators();
console.log(g.next().value);
console.log(g.return("Ending now"));
console.log(g.next().value);
