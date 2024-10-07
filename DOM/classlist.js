function myFunction() {
  document
    .getElementById("myDIV")
    .classList.add("myStyle", "anotherClass", "thirdClass");
}

function myFunction1() {
  document
    .getElementById("myDIV")
    .classList.remove("myStyle", "anotherClass", "thirdClass");
}

let numb = document.getElementById("myDIV").classList.length;
document.getElementById("demo").innerHTML = numb;

let x = document.getElementById("myDIV").classList.contains("myStyle");
document.getElementById("demo1").innerHTML = x;

// toggle

function myFunction3() {
  document.getElementById("myDIV1").classList.toggle("myStyle");
}
