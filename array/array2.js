// var a = [10, 20, 30];

// oyher way to define array
var arr = new Array();
arr[0] = 10;
arr[1] = "ram";
arr[2] = true;
document.write("<ul>");
for (var a = 0; a <= 2; a++) {
  document.write("<li>" + arr[a] + "</li>");
}
document.write("</ul>");
