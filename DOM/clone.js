function myfunction() {
  const node = document.getElementById("demo");
  const clone = node.cloneNode(true);
  document.body.appendChild(clone);
}
//  clone ka use koe v chij ko copy karne ke liy kiya jata hai
