let age = Symbol("age");
let user = {
  name: "shital kumari",
  Class: "btech",
};

user[age] = 22;
user["gender"] = "FeMale";
console.log(user);
console.log(JSON.stringify(user));
