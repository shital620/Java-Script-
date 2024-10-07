document.write(location.href);
document.write("<br>");
document.write(location.hash);
document.write("<br>");

document.write(location.hostname);
document.write("<br>");
document.write(location.origin);
document.write("<br>");

document.write(location.port);
document.write("<br>");

document.write(location.protocol);
document.write("<br>");

document.write(location.pathname);

document.write((location.href = "https://www.google.co.in/"));

// Location ka methods -------assing  reload() replace()

function newFuncation() {
  location.assign("https://www.google.co.in/");
  location.replace("https://www.google.co.in/"); //history ko hata deta hai
  location.reload("https://www.google.co.in/"); //page ko reload karta hai
}
