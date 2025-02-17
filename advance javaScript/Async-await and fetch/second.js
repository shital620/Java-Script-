async function test() {
  console.log("2:message");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("3:message");
  const students = await response.json();

  return students;
}
console.log("1:meeage");
let a = test();
console.log("4:message");
