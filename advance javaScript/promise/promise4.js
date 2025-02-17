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
    console.log("then message first " + message);
    return "promise fulfilled first message";
  })
  .then((message) => {
    console.log("then message second" + message);
    return "promise fulfilled second message";
  })
  .then((message) => {
    console.log("then message third " + message);
    return "promise fulfilled third message";
  })
  .then((message) => {
    console.log("then message foured " + message);
    return "promise fulfilled foured  message";
  });

//    esame ham log multiple then laga sakte hai
// ese promise chaining kahte hai
