var a = 50;
console.log(a);
console.table([1, 2, 3]);
console.error("something wrong");
console.warn("This is just warning");

// Test how long it takes to run a for-loop 100.000 times
console.time();
for (let i = 0; i < 100000; i++) {
  // some code
}
console.timeEnd();
