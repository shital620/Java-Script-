document.write("<table border='1px'>");

var ary = [
  ["harry", 18, "male", "b.com"],
  ["harry", 18, "male", "b.com"],
  ["harry", 18, "male", "b.com"],
  ["harry", 18, "male", "b.com"],
];
for (var a = 0; a <= 3; a++) {
  //ary[a].lenght
  document.write("<tr>");
  for (var b = 0; b <= 3; b++) {
    document.write("<td>" + ary[a][b] + "</td>");
  }
  document.write("<br>");
  document.write("</tr>");
}
document.write("</table>");
