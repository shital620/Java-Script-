let prom1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "first");
});
let prom2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "second");
});
let prom3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "third");
});
let prom4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "foured");
});

Promise.all([prom1, prom2, prom3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("error :" + error);
  });
