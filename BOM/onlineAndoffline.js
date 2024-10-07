// easame internet online hai ya offline hai
var target = document.querySelector("#box");
window.addEventListener("offline", function () {
  target.innerHTML = "you are offline";
  target.style.backgroungColor = "lightpink";
});

window.addEventListener("online", function () {
  target.innerHTML = "you are online";
  target.style.backgroungColor = "lightgreen";
});
