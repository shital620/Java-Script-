/*a = 5;
var b = "my self";
document.write(a);
document.write("<br>");
document.write("hello world ");
document.write(b);
document.write("<br>");
document.write(typeof b);
const c = 4;
document.write(c);
document.write("<br><hr>");
let d = "ram";
document.write(d);
document.write("<br>");
document.write(a + c);
document.write("<br>");
document.write(c - a);
document.write("<br>");
document.write(a * c);
document.write("<br>");
document.write(a % c);
document.write("<br>");
document.write(a ** c);
document.write("<hr>");
var a = 50;
console.log(a);
console.table([1, 2, 3]);
console.error("something wrong");
console.warn("This is just warning");

document.write("<hr>");
var a = 30;
var b = 10;
console.log(a > b);
console.log(5 === 6);
document.write("<hr> <h1> IF STATEMENT</h1>");

var a = 100;
var b = 100;
if (a == b) {
  document.write(" my name is shital");
}


document.wdocument.write("<hr>");
var age = 20;
if (age >= 18 && age <= 21) {
  document.write("yes you are eligible");
}rite("<hr>");*/
/*var age = prompt("Enter your age");
if (age >= 18) {
  document.write("you are do votting");
} else {
  document.write("not votting");
}
document.write("<br>");

var nam = "WELCOME";
var gender = "male";
if (gender == "male") {
  document.write("hello Mr" + nam);
} else {
  document.write("HELLO miss" + nam);
}
document.write("<br>");
var per = 55;
if (per >= 80 && per <= 100) {
  document.write("you are in merit.");
} else if ((per = 45 && per < 60)) {
  document.write("you are in Ist Division");
} else if (per >= 33 && per < 45) {
  document.write(" thired division");
} else {
  document.write("fall");
}
document.write("<br>");
var a = 500;
var b;
b = a == 500 ? "true" : "false";
document.write(b);
document.write("<br> <h4>switch case </h4>");
var day = 2;
switch (day) {
  case 0:
    document.write("sunday");
    break;
  case 1:
    document.write("monday");
    break;
  case 2:
    document.write("tuesday");
    break;
  case 3:
    document.write("wednesday");

    break;
  case 4:
    document.write("thuesday");
    break;
  case 5:
    document.write("friday");

    break;
  case 6:
    document.write("saturday");

    break;
  case 7:
    document.write("sunday");
    break;

  default:
    document.write("enter the vaild the day");
}
document.write("<br>");
var q = 20;
var r = 10;
alert(q + r);
document.write("<br>");
var a = confirm("do you like website ?");
if (a) {
  alert("Thanks");
} else {
  alert("sorry");
}

function hello() {
  document.write("<u>hello world </u> ");
  document.write("<br> <b>");
}

document.write("SHITAL");
hello();

document.write("RAM");
hello();

document.write("ROHIT");
hello();

document.write("ANU");
hello();

function sum(a, b, c) {
  var s = a + b + c;
  return s;
}
function percentage(tt) {
  var per = (tt / 300) * 100;
  document.write(per);
}
var total = sum(30, 30, 40);
percentage(total);
document.write("<ul>");
var g = 0;
while (g <= 10) {
  document.write(" <li><b> shital</li> <br>");
  g = g + 1;
  document.write("</ul>");
}*/

for (var a = 1; a <= 10; a++) {
  document.write("hello <br>");
}

for (var a = 1; a <= 5; a++) {
  for (var b = 1; b <= a; b++) {
    document.write(b);
  }
  document.write("<br>");
}

for (var a = 1; a <= 5; a++) {
  for (var b = 1; b <= a; b++) {
    document.write(a);
  }
  document.write("<br>");
}

document.write("<br>");
for (var a = 5; a >= 1; a--) {
  for (var b = 1; b <= a; b++) {
    document.write(b);
  }
  document.write("<br>");
}
document.write("<br>");
var arry = [1, 2, 3, 4, 5];
document.write(arry[2]);
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

document.write("<table border='1px'>");

var ary = [
  ["harry", 18, "male", "b.com"],
  ["harry", 18, "male", "b.com"],
  ["harry", 18, "male", "b.com"],
  ["harry", 18, "male", "b.com"],
];
for (var a = 0; a <= 3; a++) {
  document.write("<tr>");
  for (var b = 0; b <= 3; b++) {
    document.write("<td>" + ary[a][b] + "</y=td>");
  }
  document.write("<br>");
  document.write("</tr>");
}
document.write("</table>");
