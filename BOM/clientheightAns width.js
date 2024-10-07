//they returns the width and height of an element (in pixels) including padding but the border scrollbar or margin.
var target = document.querySelector("#box");
var width = target.clientWidth;
var height = target.clientHeight;
console.log("clientwidth :" + width);
console.log("clientheight :" + height);
