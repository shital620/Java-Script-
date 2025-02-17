// types of methods
// 1.constructor
//2.prototype
//3. static

// 1.constructor
// class student {
//   constructor() {
//     console.log("welcome my world ");
//   }
//   hello() {
//     console.log("hello  " + this.name);
//   }
// }
// let a = new student();
// a.name = "shital kumari ";
// a.hello();

// another example

class student {
  constructor(name) {
    this.name1 = name;
    console.log("welcome my world ");
  }
  hello() {
    console.log("hello  " + this.name1);
  }

  //3. static

  static staticmethod() {
    console.log("Static Function ");
  }
}
let a = new student("shital");
let b = new student("soni");

a.hello();
b.hello();
student.staticmethod(); //static method call
