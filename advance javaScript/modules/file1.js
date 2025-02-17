// import { name, user as us, test } from "./file2.js";
import * as hello from "./file2.js";

document.body.innerHTML = hello.name;
console.log(hello.name);

hello.user();

let a = new hello.test();
