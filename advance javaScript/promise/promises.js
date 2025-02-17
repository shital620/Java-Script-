// ✅ A Promise is a magic box 🎁 that waits for a result.
// ✅ It has 3 states: Pending, Resolved, or Rejected.
// ✅ We use .then() for success 🎉 and .catch() for failure 😢.
// ✅ Promises help us handle waiting time (like ordering ice cream 🍦).

// Three States of a Promise
// 1️⃣ Pending – The magic box is waiting (Mom hasn’t decided yet).
// 2️⃣ Fulfilled (Resolved) – The toy arrives! (Promise is successful 🎉).
// 3️⃣ Rejected – No toy! (Promise is broken 😞)

// let complete = true;
// let prom = new Promise(function (Resolve, reject) {
//   if (complete) {
//     Resolve("I am successfull. ");
//   } else {
//     reject("I am failed . ");
//   }
// });
// console.log(prom);

// example ......another way

// function prom(complete) {
//   return new Promise(function (Resolve, reject) {
//     if (complete) {
//       Resolve("I am successfull .");
//     } else {
//       reject("I am failed .");
//     }
//   });
// }
// let onfulfilment = (result) => {
//   console.log(result);
// };
// let onrejection = (error) => {
//   console.log(error);
// };
// console.log(prom(true));

//  example ......another way

function prom(complete) {
  return new Promise(function (Resolve, reject) {
    if (complete) {
      Resolve("I am successfull .");
    } else {
      reject("I am failed .");
    }
  });
}
let onfulfilment = (result) => {
  console.log(result);
};
let onrejection = (error) => {
  console.log(error);
};
prom(true).then(onfulfilment);
prom(true).catch(onrejection);
// prom(true).than(onfulfilment).catch(onrejection);
