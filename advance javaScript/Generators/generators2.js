function* Generators() {
  let nextNum = 300;
  while (true) {
    yield nextNum++;
  }
}

let g = Generators();
// console.log(g.next().value);
console.log(g.next());
// console.log(g.next());
for (let value of g) {
  if (value > 309) break;
  console.log(value);
}
