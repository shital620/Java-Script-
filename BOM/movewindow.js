var mywindow;
function openWindow() {
  mywindow = window.open(
    "",
    "",
    "width=500px,height=200px,left=100px,top=200px"
  );
  mywindow.document.write("<p>This is my window.</p>");
  //   window.open("https://www.google.co.in/", "_parent");
}

function closeWindow() {
  mywindow.close();
}

function moveWindow() {
  //   mywindow.moveTo(100, 100);
  mywindow.moveBy(250, 250);

  window.focus();
}
