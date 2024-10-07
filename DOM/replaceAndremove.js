// Get the list element
var listElement = document.getElementById("list");

// Create a new list item
var newListItem = document.createElement("li");
var newText = document.createTextNode("this is ram");

// Append the text to the new list item
newListItem.appendChild(newText);

// Find the old element you want to replace (e.g., the second child in the list)
var oldElement = listElement.children[1]; // Assuming the list has at least two children
var oldElement1 = listElement.children[0]; // Assuming the list has at least two children

// Replace the old element with the new one
listElement.replaceChild(newListItem, oldElement);
listElement.removeChild(oldElement1);
