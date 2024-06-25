// var arry = [1, 2, 3, 4, 5];
// document.write(arry[2]); //3
document.write("<br>");
var arry = [10, 20, 30, 40];
var sum = 0;
document.write("<ul>");
for (var a = 0; a <= 3; a++) {
  document.write("<li>" + arry[a] + "</li>");
  sum = sum + arry[a];
}
document.write("</ul>");

document.write("the total    " + sum);
document.write("<br>");
