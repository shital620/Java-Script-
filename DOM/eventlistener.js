let element;
element = document.getElementById("myBtn");
element.addEventListener("click", my);
element.addEventListener("mouseover", my1);

function my() {
  document.getElementById("demo").innerText =
    "I am Shital Kumari from Bihar. As for my educational background, I have completed BCA from Indira Gandhi National Open University in Patna, Bihar. Now I am pursuing MCA from Sagar Institute of Research & Technology (SIRT), Madhya Pradesh. I have technical skills in Java (basic), HTML, CSS, JavaScript, Bootstrap, C programming, and DSA. I have received a certificate from HACKATHON CODEENERGIA. I am specifically a front-end developer";
}

function my1() {
  document.getElementById("demo").innerHTML += " Welcome</br>";
}
