// Async-Await.........Imagine you ordered a pizza 🍕 online. You have to wait for the delivery guy,
//  right? You can’t eat until the pizza arrives.

// JavaScript has the same problem! Some tasks take time (like fetching data from the internet),
// so we wait using async-await.
// Using async-await, JavaScript says:
// 🧑‍💻 "I'll wait patiently until the task is done, then continue."

async function getdata() {
  setTimeout(function () {
    console.log(" I am inside set timeout block");
  }, 3000);
}
getdata();

// async.. promise ke problem ko slove kar hota hai //always reture promise
