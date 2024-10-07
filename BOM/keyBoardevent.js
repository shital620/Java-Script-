// keyboard Events ...koe v press karate hai to koe task proform hota hai
// easame onkeydown ka use karate hai

// document.querySelector("#myinput").addEventListener("keydown", function (e) {
//   console.clear();
//   var text = "you presses button :" + e.key;
//   console.log(text);
// });

//other example
var left = 0;
var up = 0;
document.querySelector("#myinput").addEventListener("keydown", function (e) {
  console.clear();
  switch (e.key) {
    case "Arrowright":
      left = left + 5;
      break;
    case "ArrowLeft":
      left = left - 5;

      break;

    case "Arrowup":
      up = up + 5;

      break;
    case "Arrowdown":
      up = up - 5;
      break;
    default:
      console.log("oyher key pressed.");
      break;
  }

  console.log("Left:" + left);
  console.log("up :" + up);

  var target = (document.style.marginLeft = left + "px");
  var target = (document.style.marginTop = up + "px");
});
