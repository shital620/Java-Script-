// insretAdjacentElement ....tag ko create kar sath hi append v karta hai .....esame 4 position hoti hai 1.beforebegin 2.afterbegin   3.beforeend 4.afterend

var target = document.getElementById("test");
var newElement = "<h2> this is heading</h2>";
target.insertAdjacentHTML("beforeend", newElement);
// InsertAdjectHTML....tag with text dono sath me hi karega
// InsertadjectText....Text ko create or append dono sath me karta hai
