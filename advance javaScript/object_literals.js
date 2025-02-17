let n = "student";
var obj = {
  [n + "name"]: "yahoo Baba",
  course: "btech",
  detail: function () {
    return `${this.studentname} is student of ${this.course}`;
  },
};
console.log(obj);
console.log(obj.detail());

// another example

let obj1 = {
  name: "yahoo Baba",
  show() {
    console.log(this.name);
  },
};

// another example

let name = "yahoo Baba ";
let course = "btech";
function student(name, course) {
  return { name, course };
}
console.log(student(name, course));
