function sum(a, b, c) {
  var s = a + b + c;
  return s;
}
function percentage(tt) {
  var per = (tt / 300) * 100;
  document.write(per);
}
var total = sum(50, 30, 40);
percentage(total);
