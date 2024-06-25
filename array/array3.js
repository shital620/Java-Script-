// user enter value
// any data types value enter user
var arr = new Array();
for (var g = 0; g < 5; g++) {
  arr[g] = prompt("enter thw value:");
}
document.write("<ul>");
for (var a = 0; a <= 4; a++) {
  document.write("<li>" + arr[a] + "</li>");
}
document.write("</ul>");
