// An error is like a small mistake in your code that stops it from working!
// Just like if you forget your homework at home, your teacher won’t let you escape! 😜

try {
  console.log(name); // Oops! name is not declared
} catch (error) {
  console.log("Uh-oh! Something went wrong.");
  console.log("Error message: " + error.message);
}
