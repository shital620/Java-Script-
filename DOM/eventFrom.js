function focusfunction(element) {
  element.style.backgroundColor = "lime";
}

function blurFunction(element) {
  element.style.backgroundColor = "";
}

function oninputFunction(element) {
  var x = element.value;
  document.getElementById("test").innerText = x;
}

function onchangeFunction(element) {
  var x = element.value;
  document.getElementById("test").innerText = x;
}

function submitFunction() {
  alert("your form submited");
}
