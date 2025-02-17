let prom = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("promise fulfilled");
  } else {
    reject("promise rejected");
  }
});
prom
  .then((message) => {
    console.log("then message " + message);
  })
  .catch((error) => {
    console.log("error :" + error);
  });
