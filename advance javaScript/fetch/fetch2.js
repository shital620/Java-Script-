// fetch()...insert,update,Delete
// //fetch(file/url,{
// method:"post",..."put" "DELETE"  "GET"
// body:data,...form data('application/x-www-form-urlencoded')/json data /text
// header:{
// 'content-type':'application/json',
// },
// });

document.getElementById("myform").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting

  var obj = {
    title: document.getElementById("titletext").value, // Fixed ID
    body: document.getElementById("bodytext").value, // Fixed ID
    userid: Number(document.getElementById("userid").value), // Convert to number
  };

  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify(obj),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((json) => console.log("Updated Post:", json))
    .catch((error) => console.error("Error:", error));
});
