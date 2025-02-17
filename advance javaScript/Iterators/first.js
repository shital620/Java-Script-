// An iterator is something that goes through a collection (like a list of toys 🧸, numbers 🔢, or names 🏷️) one by one.

// 📌 Example: Imagine You Have a Box of Chocolates 🍫!

// You don’t eat all at once!
// You take one chocolate at a time.
// That’s exactly how an iterator works in JavaScript!

// 🏆 Final Summary
// ✅ Iterators let us go through things one step at a time
// ✅ They use next() to get the next item
// ✅ Arrays already have built-in iterators
// ✅ We can use for...of to loop through iterators easily

let games = ["Minecraft", "Mario", "Zelda"];
let gameIterator = games[Symbol.iterator]();

console.log(gameIterator.next().value);
console.log(gameIterator.next().done);
console.log(gameIterator.next());
console.log(gameIterator.next());
