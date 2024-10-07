document.getElementById("inner").parentElement.style.background = "green";

var a = document.getElementById("inner").parentElement;
// You don't need to declare 'a' twice, so remove the redundant declaration.
document.getElementById("inner").firstElementChild.style.background = "pink";
document.getElementById("inner").firstElementChild.innerHTML = "<b>hello</b>";
document.getElementById("inner").lastElementChild.style.background = "yellow";

// Correctly selecting the 'previous' and 'next' siblings of child-c
document.getElementById("child-c").previousElementSibling.style.background =
  "gray";
document.getElementById("child-c").nextElementSibling.style.background =
  "black";

console.log(a);
