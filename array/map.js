var ary = [
  { fname: "ram", lname: "kumar" },
  { fname: "rohan ", lname: "kumar" },
  { fname: "sita", lname: " kumari" },
  { fname: "ramesh", lname: "kumar" },
  { fname: "rakesh", lname: " kumar" },
  { fname: "rohan", lname: " kumar" },
  { fname: "rita", lname: "kumari" },
];
var b = ary.map(text);
document.write(b);

function text(x) {
  return x.fname + "" + x.lname;
}
