var mywindow;
function openWindow() {
  mywindow = window.open(
    "https://www.google.co.in/",
    "Google",
    "width=500px,height=200px,left=100px,top=200px"
  );
  //   window.open("https://www.google.co.in/", "_parent");
}

function closeWindow() {
  mywindow.close();
}
