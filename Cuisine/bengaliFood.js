let addItems = document.getElementsByClassName("addItems");
let count = document.getElementById("count");
let foodItem="No items are added in the cart";
let user=JSON.parse(sessionStorage.getItem("foodItem")) || [];
for (let i = 0; i < addItems.length; i++) {
    addItems[i].addEventListener("click", (e) => {
        let c = parseInt(count.textContent);
        c++;
        count.textContent = c;
        alert(c+" item added to cart!");
        foodItem=e.target.parentElement.querySelector("span").textContent;
        user.push(foodItem);
        sessionStorage.setItem("foodItem",JSON.stringify(user));
    });
}
let cart=document.querySelector("#cart");
cart.addEventListener("click",()=>{
    location.href="../Order/cart.html";
})
let backward=document.querySelector("#backward");
backward.addEventListener("click",()=>{
    history.back();
})
let forward=document.querySelector("#forward");
forward.addEventListener("click",()=>{
    history.forward();
})