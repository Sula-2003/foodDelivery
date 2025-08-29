let signup=document.querySelector("#signup");
signup.addEventListener("click",()=>{
    location.href="./signup.html";
})
let login=document.querySelector("#login");
login.addEventListener("click",()=>{
    location.href="./login.html";
})
let bengal=document.querySelector(".button1");
bengal.addEventListener("click",()=>{
    location.href="./Cuisine/bengaliFood.html"
})
let south=document.querySelector(".button2");
south.addEventListener("click",()=>{
    location.href="./Cuisine/southIndianFood.html";
})
let chinese=document.querySelector(".button3");
chinese.addEventListener("click",()=>{
    location.href="./Cuisine/chinese.html";
})
let cart=document.querySelector("#cart");
cart.addEventListener("click",()=>{
    location.href="./Order/cart.html";
})
let cartCount=document.getElementById("count-items");
