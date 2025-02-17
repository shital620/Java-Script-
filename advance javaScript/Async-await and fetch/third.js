async function test() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const students = await response.json();

  return students;
}
test()
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log("Error caught:", error);
  });
