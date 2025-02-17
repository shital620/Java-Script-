function* Generators() {
  let result = [yield, yield, yield, yield];
  console.log(`Result :${result}`);
}
let g = Generators();
g.next();
g.next(500);
g.next(600);
g.next(700);
g.next(800);
