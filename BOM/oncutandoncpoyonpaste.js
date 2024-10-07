//user aapke documet me cut or copy or paste kiya hai to usaka pata lag jata hai esase
var target = document.querySelector("#myinput");
target.addEventListener("copy", function () {
  console.clear();
  console.log("you copies text .");
  target.style.backgroundColor = "red";
});

target.addEventListener("cut", function () {
  console.clear();
  console.log("you cuted text .");
  target.style.backgroundColor = "yellow";
});

target.addEventListener("paste", function () {
  console.clear();
  console.log("you pasted text .");
  target.style.backgroundColor = "gray";
});
