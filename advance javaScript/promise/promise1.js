let firstpromise = new Promise((resolve, reject) => {
  console.log("welcome");
  resolve(1101);
  reject(new error("internal server error "));
});
