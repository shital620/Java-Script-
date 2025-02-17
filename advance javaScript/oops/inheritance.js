// class employee {
//   constructor(name) {
//     this.empname = name;
//     console.log("constructor :Employee");
//   }
//   info() {
//     console.log("Employee Name :" + this.empname);
//   }
// }

// class manager extends employee {
//   constructor(name) {
//     super();
//     console.log("constructor :manager" + name);
//   }
// }

// let a = new manager("   yahoo Baba");
// a.info();

class employee {
  constructor(name, age, salary) {
    this.empname = name;
    this.empage = age;
    this.empsalary = salary;
    console.log("constructor :Employee");
  }
  info() {
    document.write(`<h3>employee class </h3> Name :${this.empname} <br>
        age:${this.empage} <br>
        salary:${this.empsalary} <br>`);
  }
}

class manager extends employee {}

let a = new manager("yahoo Baba", 22, "20000");
a.info();
