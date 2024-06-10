document.write("<h1>If statement</h1>");
var age = 20;
if (age >= 18 && age <= 21) {
  document.write("yes you are eligible");
}
document.write("<br>");

document.write("----------------------------------------------------");
document.write("<br>");

var age = prompt("Enter your age");
if (age >= 18) {
  document.write("you are do votting");
} else {
  document.write("not votting");
}
document.write("<br>");
document.write("----------------------------------------------");
document.write("<br>");

var nam = "WELCOME";
var gender = "male";
if (gender == "male") {
  document.write("hello Mr" + nam);
} else {
  document.write("HELLO miss" + nam);
}
document.write("<br>");

document.write("-------------------------------------------------");
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
document.write("----------------------------------------------------");
document.write("<br>");

var a = 500;
var b;
b = a == 500 ? "true" : "false"; //trenary operator
document.write(b);
