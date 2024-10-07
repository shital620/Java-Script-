// javascript me tin method hote hai  1.creatElement  2.creatTextNode 3.createComment
// 1.koe v tag lagana chahate hai to ...createElement ka use karege
// koe v text ko likhana chahte hai to ...createTextNode ka use karege
// comment html ke file me javascirpt ke through dena chate hai to creatComment ka use karege
// Creating a new paragraph element
var newElement = document.createElement("p");
newElement.innerText = "This is a paragraph.";

// Creating a text node
var newText = document.createTextNode("I am Shital Kumari");

// Creating a comment
var newComment = document.createComment("This is a comment");

// Appending the paragraph, text node, and comment to the body (or another container)
document.body.appendChild(newElement);
document.body.appendChild(newText);
document.body.appendChild(newComment);

// Logging the created element
console.log(newElement);
