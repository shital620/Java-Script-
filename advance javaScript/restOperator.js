// yah multiple argument ka handle karta hai
function sum(name, ...numbers) {
  document.write(`hello ${name} :`);
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

document.write(sum("shital", 1, 2, 3, 4, 5, 6), "<br>");

document.write(sum("soni", 10, 20, 30, 40, 50, 60));
