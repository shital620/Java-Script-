// alert()
// write()
// log()
// window.alert("hi student");
// document.write(hello);
// overwrite
// console.log("how are you");
// let best hai ..yah use karte hai
// const express =express ();

// python and js and php dynamic variable define karta hai
// var first;
// first = "hello";
// first = 100;
// first = 19.46;
// first = function () {
//   alert("hello");
//   return "hi";
// };
// first();

// condition statement kease likhate hai or function padh kar aana hai

// var ursername = "admin";
// var password = 1234;
// if ((ursername = "admin" && password == "1234")) {
//   document.write("ture");
// } else {
//   document.write("false");
// }

// function login() {
//   if ((ursername = "abc")) {
//     document.write("hello");
//   }
// }
// login();
// // if ke andar nhi condition lagate hai to

// function login() {
//   if (ursername) {
//     alert("hi hello");
//   }
// }
// login();

// let a = 23;
// let b = 20;
// function sum() {
//   let add = a + b;
//   alert(add);
// }
// sum();
// let para = document.getElementById("paragraph");
// function login() {
//   para.innerHTML = "hello all";
//   para.style.color = "red";
// }

let image = ["./media/blockchain.jpg", { second: "./media/d.webp" }];
let secondImage = image[0];

let imageshow = image[1];

document.querySelector("#img2").src = imageshow.second;
