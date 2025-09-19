let signup=document.getElementById("signup");
let login=document.getElementById("login");
let cart=document.getElementById("cart");
signup.addEventListener("click",()=>{
    location.href="../signup.html";
})
login.addEventListener("click",()=>{
    location.href="../login.html";
})
cart.addEventListener("click",()=>{
    location.href="../Order/cart.html";
})
let count=document.getElementById("count");
let addItems=document.getElementsByClassName("addItems");
let foodItem="No items added to the cart";
let user=JSON.parse(sessionStorage.getItem("foodItems")) || [];
for(let i=0;i<addItems.length;i++){
    addItems[i].addEventListener("click",(e)=>{
        let c=parseInt(count.textContent);
        c++;
        count.textContent=c;
        alert(c+" items are added");
        foodItem=e.target.parentElement.querySelector("span").textContent;;
        user.push(foodItem);
        sessionStorage.setItem("foodItem",JSON.stringify(user));
    }) 
}
let backward=document.getElementById("backward");
backward.addEventListener("click",()=>{
    history.back();
})
let forward=document.getElementById("backward");
forward.addEventListener("click",()=>{
    history.forward();
})