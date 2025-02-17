// AJAX (Asynchronous JavaScript and XML) is like sending a letter 📩 and waiting for a reply without stopping everything!
//AjAX is a technique for creating fast and dynamic web pages.
// JavaScript uses AJAX to get data from the internet without reloading the entire page! 🚀

// How AJAX Works (Simple Example)
// Imagine you ask a robot 🤖 to bring you a book 📚.

// You send a request → "Hey robot, get me a book!"
// The robot goes to the library 🏛️.
// When it finds the book, it brings it back to you.
// You read the book 📖.
// In JavaScript, we do this using AJAX with the XMLHttpRequest object.

// How This Works 🧐
// 📢 Step 1: let xhr = new XMLHttpRequest(); → Create a new robot (request).
// 📢 Step 2: xhr.open("GET", "URL", true); → Ask the robot to go get a joke.
// 📢 Step 3: xhr.send(); → Send the request.
// 📢 Step 4: xhr.onload = function () { ... } → Wait for the response.
// 📢 Step 5: JSON.parse(xhr.responseText); → Convert the joke into a JavaScript object.
// 📢 Step 6: Print the joke 🤣.

function loaddata() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
      // console.log(this.responseText); // Prints the file content
      // } else if (this.readyState === 4) {
      // console.error("Error loading file:", this.status);
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // Check if file path is correct
  xhttp.send();
}
